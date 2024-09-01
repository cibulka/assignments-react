import { useCallback, useContext, useEffect, useRef } from "react";

import { API } from "../../../constants/server";
import { Item } from "../../../types/server";

import { ItemsContext } from "./ItemsProvider";
import { ItemsActionType } from "./action-types";

export function useItemsContext() {
    const context = useContext(ItemsContext);
    if (!context) throw new Error("Missing ItemsProvider");
    return context;
}

export function useOnItemAddOrEdit(editedId: number | null) {
    const { dispatch } = useItemsContext();

    const editedIdRef = useRef(editedId);
    useEffect(() => {
        editedIdRef.current = editedId;
    }, [editedId]);

    return useCallback((label: string) => {
        let url: string;
        let method: string;
        let actionType: ItemsActionType;
        if (editedIdRef.current) {
            url = API.item(editedIdRef.current);
            method = 'PUT';
            actionType = ItemsActionType.PATCH_TODO;
        } else {
            url = API.items;
            method = 'POST';
            actionType = ItemsActionType.POST_TODO;    
        }
    
        fetch(url, {
            method,
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ 
                label: label,
                isDone: false,
            }),
        })
            .then(res => res.json())
            .then((res: Item) => {
                dispatch?.({ type: actionType, payload: res });
            })
    }, []);
};

export function useGetOnItemDelete() {
    const { dispatch } = useItemsContext();

    return useCallback((deletedId: number) => () => {
        return fetch(API.item(deletedId), {
            method: 'DELETE'
        })
            .then(() => {
                dispatch?.({ type: ItemsActionType.DELETE_TODO, payload: deletedId });
            })
    }, []);
}

export function useGetOnItemLabelEdit() {
    const { dispatch } = useItemsContext();
    return useCallback((id: number) => (label: string) => {
        dispatch?.({ type: ItemsActionType.PATCH_TODO_FORM, payload: { id, label } });
    }, [dispatch])
}

export function useGetOnItemDoneToggle() {
    const { dispatch } = useItemsContext();
    return useCallback((id: number) => (isDone: boolean) => {
        const url = isDone ? API.complete(id) : API.incomplete(id);
        return fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json',
            },
        })
            .then(() => {
                dispatch?.({ type: ItemsActionType.TOGGLE_STATE, payload: { id, isDone } });
            })
    }, []);
}