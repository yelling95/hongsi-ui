import React, { CSSProperties } from 'react';
import './Basic.scss';
interface BasicItemProps {
    id?: string;
    size?: 'md' | 'lg';
    title: string;
    disabled?: boolean;
    children?: unknown;
    style?: CSSProperties;
    onClick?: () => void;
}
declare const BasicItem: ({ id, size, title, disabled, onClick, }: BasicItemProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default BasicItem;
