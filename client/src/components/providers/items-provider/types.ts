import { Item } from "../../../types/server";

import { ItemsAction } from "./action-types";

export type ItemsContextValue = {
    items: Item[]
}

export type ItemsDispatch = React.Dispatch<ItemsAction>;