import { ItemsAction, ItemsActionType } from "./action-types";
import { ItemsContextValue } from "./types";

export function itemsReducer(state: ItemsContextValue, action: ItemsAction): ItemsContextValue {
  switch (action.type) {
    case ItemsActionType.DELETE_TODO:
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
        };
    case ItemsActionType.PATCH_TODO: {
        return {
          ...state,
          edited: null,
          items: state.items.map(item => item.id === action.payload.id ? action.payload : item),
        };
    }
    case ItemsActionType.PATCH_TODO_FORM:
        return {
          ...state,
          edited: {
            id: action.payload.id,
            label: action.payload.label,
          },
        };
    case ItemsActionType.LOAD_TODOS:
        return {
          ...state,
          items: action.payload,
        }
    case ItemsActionType.POST_TODO: {
        return {
          ...state,
          items: [...state.items, action.payload],
        }
    }
  }
}