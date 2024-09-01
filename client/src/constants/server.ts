export const BE_URL = 'http://localhost:3000';

export const API = {
    complete: (id: number) => `${BE_URL}/items/${id}/complete`,
    incomplete: (id: number) => `${BE_URL}/items/${id}/incomplete`,
    item: (id: number) => `${BE_URL}/items/${id}`,
    items: `${BE_URL}/items`,
};