import { ButtonAction, ButtonIcon, ButtonPlain } from "./styles";
import { ButtonProps, ButtonVariant } from "./types";

const buttons = {
    [ButtonVariant.ACTION]: ButtonAction,
    [ButtonVariant.ICON]: ButtonIcon,
    [ButtonVariant.PLAIN]: ButtonPlain
};

export const Button = ({ 
    children, 
    className, 
    onClick, 
    type = 'button', 
    variant = ButtonVariant.PLAIN 
}: ButtonProps) => {
    const ButtonStyled = buttons[variant];
    return (
        <ButtonStyled className={className} onClick={onClick} type={type}>
            {children}
        </ButtonStyled>
    );
};