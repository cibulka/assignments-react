import { Item } from "../../../types/server";

export enum ItemsActionType {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  LOAD_TODOS = "LOAD_TODOS",
}

export type ItemsAction =
  | { type: ItemsActionType.ADD_TODO; payload: Item }
  | { type: ItemsActionType.DELETE_TODO; payload: number }
  | { type: ItemsActionType.LOAD_TODOS; payload: Item[] };