import { useContext } from "react";
import { ItemsContext } from "./ItemsProvider";

export function useItemsProvider() {
    const context = useContext(ItemsContext);
    if (!context) throw new Error("Missing ItemsProvider");
    return context;
}