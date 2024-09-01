import styled, { css } from "styled-components";

const buttonShared = css`
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1px solid;
    border-radius: 50%;
`;

export const ButtonAction = styled.button`
    ${buttonShared}
    background: rgba(225, 200, 200, 0);
    transition: background 0.2s ease;
    border-color: transparent;
    &:hover {
        background: rgba(225, 200, 200, 1);
    }
    & > * {
        width: 30px;
        height: 30px;
    }
`;

export const ButtonIcon = styled.button`
    ${buttonShared}
    background-color: ${(props) => props.theme.colors.grass9};
    border-color: ${(props) => props.theme.colors.olive9};
    color: #ffffff;
`;

export const ButtonPlain = styled.button`
    appearance: none;
    `;