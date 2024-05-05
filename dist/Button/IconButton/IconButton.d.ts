import React, { CSSProperties } from 'react';
import './IconButton.scss';
interface IconButtonProps {
    id?: string;
    type?: 'Account' | 'Add' | 'All' | 'Calendar' | 'Camera' | 'Chat' | 'Check' | 'Clear' | 'Close' | 'Collapse' | 'Default' | 'Dropdown' | 'EditWrite' | 'Empty' | 'Filter' | 'Group' | 'Home' | 'Left' | 'Right' | 'Like' | 'LocationPin' | 'More' | 'Warning' | 'Notification' | 'NotificationNone' | 'Photo' | 'Search' | 'Send' | 'Share' | 'Time' | 'Warning';
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
