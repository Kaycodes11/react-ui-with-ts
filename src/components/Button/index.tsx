import * as React from "react";
import {StyledButton} from "./styled";

interface ButtonProps {
    btnText: string;
    variant: `outlined` | `contained`;
    margin?: string;
    post?: {
        id: string;
        text: string;
    };
    onClick: () => void;
}


const Button: React.FC<ButtonProps> = ({btnText, variant, margin, onClick}) => {
    return (
        <StyledButton variant={variant} margin={margin} onClick={onClick}>
            {btnText}
        </StyledButton>
    );
};

export {Button};
