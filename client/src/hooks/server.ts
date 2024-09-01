import { useCallback } from "react";

import { API } from "../constants/server";

export function useOnItemAdd() {
    return useCallback((label: string) => {
        return fetch(API.items, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ 
                label,
                isDone: false,
            }),
        });
    },[]);
}
