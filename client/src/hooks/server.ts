import { useCallback } from "react";

import { API } from "../constants/server";

export function useOnItemSubmit(id: number | null) {

    const url = id ? API.item(id) : API.items;
    const method = id ? 'PATCH' : 'POST';

    return useCallback((label: string) => {
        return fetch(url, {
            method,
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ 
                label,
                isDone: false,
            }),
        })
    }, [url, method]);
}