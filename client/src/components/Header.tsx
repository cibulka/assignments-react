import { PlusIcon } from "@radix-ui/react-icons";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { Form } from "./form";
import { useItemsContext } from "./providers/items-provider/hooks";
import { Button } from "./button";
import { ButtonVariant } from "./button/types";

const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;
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
                <Button onClick={onOpenForm} variant={ButtonVariant.ICON}>
                    <PlusIcon />
                </Button>
            )}
        </StyledDiv>
    );
};
