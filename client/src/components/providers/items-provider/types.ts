import { Item } from "../../../types/server";

import { ItemsAction } from "./action-types";

export type ItemsContextValue = {
    edited: {
        id: number;
        label: string | null;
    } | null;
    labelAdding: string | null;
    items: Item[];

}

export type ItemsDispatch = React.Dispatch<ItemsAction>;