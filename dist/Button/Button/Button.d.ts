import React, { CSSProperties } from 'react';
import './Button.scss';
interface ButtonProps {
    id?: string;
    type?: 'primary' | 'secondary' | 'line';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    children?: unknown;
    style?: CSSProperties;
    onClick?: () => void;
}
declare const Button: ({ id, type, size, disabled, children, style, onClick, ...props }: ButtonProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default Button;
