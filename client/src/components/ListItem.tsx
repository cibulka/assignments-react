import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";
import { ButtonVariant } from "./button/types";
import { Button } from "./button";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    button:not(.checkbox) {
        opacity: 0;
        transition: opacity 0.4s ease;
    }
    &:hover button:not(.checkbox) {
        opacity: 1;
    }
`;

const Label = styled.label`
    margin-left: 15px;
    flex: 1;
`;

const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5em;
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
            <Checkbox className="checkbox" checked={isDone} onCheckedChange={onItemDoneToggle} />
            <Label>{label}</Label>
            <Actions>
                <Button className="delete" onClick={() => onItemDelete()} variant={ButtonVariant.ACTION}>
                    {/* TODO: This should not be hardcoded */}
                    <TrashIcon color="#E5484D" />
                </Button>
                <Button onClick={() => onItemLabelEdit(label)} variant={ButtonVariant.ACTION}>
                    <Pencil1Icon />
                </Button>
            </Actions>
        </StyledDiv>
    );
};
