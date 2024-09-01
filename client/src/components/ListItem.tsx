import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    button:not(:first-of-type) {
        opacity: 0;
        transition: opacity 0.4s ease;
    }
    &:hover button:not(:first-of-type) {
        opacity: 1;
    }
`;

const Label = styled.label`
    margin-left: 15px;
    flex: 1;
`;

export type LiteeItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = (props: LiteeItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;

    return (
        <StyledDiv>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            <Label>{label}</Label>
            <button>
                <TrashIcon />
            </button>
            <button onClick={() => onItemDelete()}>
                <Pencil1Icon />
            </button>
        </StyledDiv>
    );
};
