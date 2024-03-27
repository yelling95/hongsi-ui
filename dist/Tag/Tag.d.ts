import React, { CSSProperties } from 'react';
import './Tag.scss';
interface TagProps {
    id?: string;
    size?: 'lg' | 'md' | 'sm';
    selected?: boolean;
    children?: unknown;
    style?: CSSProperties;
    onClick?: () => void;
}
declare const Tag: ({ id, size, selected, children, style, onClick, ...props }: TagProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default Tag;
