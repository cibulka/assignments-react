import styled from "styled-components";

const InputStyled = styled.input``;

type InputProps = {
    autoFocus?: boolean;
    value: string;
    onValueChange: (value: string) => void;
};

export const Input = (props: InputProps) => {
    const { autoFocus, value, onValueChange } = props;

    return (
        <InputStyled
            autoFocus={autoFocus}
            value={value}
            onChange={(e) => {
                const value = e.currentTarget.value;
                onValueChange(value);
            }}
        />
    );
};
