export const BE_URL = 'http://localhost:3000';

export const API = {
    item: (id: number) => `${BE_URL}/items/${id}`,
    items: `${BE_URL}/items`,
};