import React, { CSSProperties } from 'react';
import './IconButton.scss';
interface IconButtonProps {
    id?: string;
    type?: 'Account' | 'Like' | 'LocationPin' | 'More' | 'Warning' | 'Close' | 'EditWrite' | 'Search' | 'Left' | 'Right' | 'Share' | 'More' | 'Clear' | 'Notification' | 'NotificationNone' | 'Filter' | 'Dropdown' | 'Default';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    children?: unknown;
    color?: string;
    style?: CSSProperties;
    fill?: string;
    iconWidth?: number;
    iconHeight?: number;
    onClick?: () => void;
}
declare const IconButton: ({ id, type, size, disabled, children, color, fill, iconWidth, iconHeight, style, onClick, ...props }: IconButtonProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default IconButton;
