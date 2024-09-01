import styled from "styled-components";

import { useItemsContext } from "./providers/items-provider/hooks";
import { ListItem } from "./ListItem";
import { useCallback } from "react";
import { ItemsActionType } from "./providers/items-provider/action-types";

export const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const List = () => {
    const { state, dispatch } = useItemsContext();

    // TODO: Implement items methods
    const onItemDoneToggle = console.log;
    const onItemDelete = console.log;

    const getOnItemLabelEdit = useCallback((id: number) => (label: string) => {
        dispatch?.({ type: ItemsActionType.PATCH_TODO_FORM, payload: { id, label } });
    }, [dispatch]);

    return (
        <ListStyled>
            {/* TODO: Implement error view */}
            {/* TODO: Implement empty view */}
            {/* TODO: Implement loading view */}
            {state.items.map(item => {
                const onItemLabelEdit = getOnItemLabelEdit(item.id);
                return (
                    <ListItem 
                        key={item.id} 
                        isDone={item.isDone} 
                        label={item.label} 
                        onItemLabelEdit={onItemLabelEdit}
                        onItemDoneToggle={onItemDoneToggle}
                        onItemDelete={onItemDelete}
                    />
                );
            })}
        </ListStyled>
  );
};
