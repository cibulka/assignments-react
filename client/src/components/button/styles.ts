import styled, { css } from "styled-components";
import { olive, grass, grayA, grayDarkA } from "@radix-ui/colors";

const buttonShared = css`
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border: 1px solid;
    border-radius: 50%;
`;

export const ButtonAction = styled.button`
    ${buttonShared}
    background-color: ${grayA};
    border-color: ${grayDarkA};
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