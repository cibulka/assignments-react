import { Item } from "../../../types/server";

export enum ItemsActionType {
  DELETE_TODO = "DELETE_TODO",
  LOAD_TODOS = "LOAD_TODOS",
  PATCH_TODO = "PATCH_TODO",
  PATCH_TODO_FORM = "PATCH_TODO_FORM",
  POST_TODO = "POST_TODO",
}

export type ItemsAction =
  | { type: ItemsActionType.DELETE_TODO; payload: number }
  | { type: ItemsActionType.LOAD_TODOS; payload: Item[] }
  | { type: ItemsActionType.PATCH_TODO; payload: Item }
  | { type: ItemsActionType.PATCH_TODO_FORM; payload: { id: number; label: string } }
  | { type: ItemsActionType.POST_TODO; payload: Item }
  