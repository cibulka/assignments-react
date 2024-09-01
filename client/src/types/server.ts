export type Item = {
    label: string;
    isDone: boolean;
    createdAt: number;
    id: number;
}

export enum FetchState {
    IDLE = 'IDLE',
    LOADING = 'LOADING',
    FAILURE = 'FAILURE',
    SUCCESS = 'SUCCESS',
}