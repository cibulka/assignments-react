import { ItemsAction, ItemsActionType } from "./action-types";
import { ItemsContextValue } from "./types";

export function itemsReducer(state: ItemsContextValue, action: ItemsAction): ItemsContextValue {
  switch (action.type) {
    case ItemsActionType.ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case ItemsActionType.DELETE_TODO:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case ItemsActionType.LOAD_TODOS:
      return {
        ...state,
        items: action.payload,
      }
  }
}