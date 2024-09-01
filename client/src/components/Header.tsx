import { PlusIcon } from "@radix-ui/react-icons";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { Form } from "./form";
import { useItemsContext } from "./providers/items-provider/hooks";

const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;

    button {
        all: unset;
    }

    .placeholder, button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        border: 1px solid;
    }

    .placeholder {
        border-color: transparent;
    }

    button {
        background-color: ${(props) => props.theme.colors.grass9};
        border-color: ${(props) => props.theme.colors.olive9};
        border-radius: 50%;

        color: #fff;
    }
`;

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = ({ children, onItemAdd }: HeaderProps) => {
    const [isPostForm, setIsPostForm] = useState(false);

    const { state: { edited } } = useItemsContext();

    const onOpenForm = useCallback(() => setIsPostForm(true), []);
    const onCloseForm = useCallback(() => setIsPostForm(false), []);

    const onSubmit = useCallback((label: string) => {
        onItemAdd(label);
        setIsPostForm(false);
    }, [onCloseForm]);

    useEffect(() => {
        if (edited) setIsPostForm(true);
    }, [edited]);

    return (
        <StyledDiv>
            <h1>{children}</h1>
            {isPostForm ? (
                <Form initialValue={edited?.label || ''} onCancel={onCloseForm} onSubmit={onSubmit} /> 
            ) : (
                <button type="button" onClick={onOpenForm}>
                    <PlusIcon />
                </button>
            )}
        </StyledDiv>
    );
};
