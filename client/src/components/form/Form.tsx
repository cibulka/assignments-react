import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import styled from "styled-components";

import { Input } from "./Input";
import { ButtonIcon } from "../button/styles";

const FormStyled = styled.form`
    display: flex;
    gap: 0.5em;
    input {
        margin-right: 1em;
    }
`;

type FormProps = {
    initialValue: string;
    onSubmit: (value: string) => void;
    onCancel: () => void;
};

export const Form = (props: FormProps) => {
    const { initialValue, onSubmit, onCancel } = props;

    const [inputValue, setInputValue] = useState(initialValue);

    return (
        <FormStyled
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(inputValue);
            }}
            onReset={() => {
                onCancel();
            }}
        >
            <Input autoFocus value={inputValue} onValueChange={(value) => setInputValue(value)} />
            <ButtonIcon type={"submit"}>
                <CheckIcon />
            </ButtonIcon>
            <ButtonIcon type={"reset"}>
                <Cross1Icon />
            </ButtonIcon>    
        </FormStyled>
    );
};
