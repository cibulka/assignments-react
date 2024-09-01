import { createContext, useReducer, PropsWithChildren, useEffect } from "react";

import { API, BE_URL } from "../../../constants/server";

import { itemsReducer } from "./reducer";
import type { ItemsContextValue, ItemsDispatch } from './types';
import { ItemsActionType } from "./action-types";


const initialState: ItemsContextValue = {
    items: []
  };

export const ItemsContext = createContext<{
    state: ItemsContextValue;
    dispatch: ItemsDispatch | null;
  }>({ state: initialState, dispatch: null });

export const ItemsProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(itemsReducer, initialState);

    useEffect(() => {
      fetch(`${BE_URL}${API.items}`).then(res => res.json()).then(todos => {
        dispatch({ type: ItemsActionType.LOAD_TODOS, payload: todos });
      });
    }, [dispatch]);

    return (
        <ItemsContext.Provider value={{ state, dispatch }}>
            {children}
        </ItemsContext.Provider>
    );
};
