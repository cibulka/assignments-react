import { ReactNode } from "react";

export enum ButtonVariant {
    ACTION = 'ACTION',
    ICON = 'ICON',
    PLAIN = 'PLAIN',
};

export type ButtonProps = {
    children: ReactNode; // styled-components & PropsWithChildren are not compatible
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit'
    variant?: ButtonVariant
};