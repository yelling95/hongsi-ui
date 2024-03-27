import React, { CSSProperties } from 'react';
import './TextButton.scss';
interface TextButtonProps {
    id?: string;
    disabled?: boolean;
    children?: unknown;
    style?: CSSProperties;
    onClick?: () => void;
}
declare const TextButton: ({ id, disabled, children, style, onClick, ...props }: TextButtonProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default TextButton;
