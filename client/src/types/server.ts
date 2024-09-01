// This could probably be infered from /server somehow
export type Item = {
    label: string;
    isDone: boolean;
    createdAt: number;
    finishedAt?: number;
    id: number;
}
