import React, { CSSProperties, SVGProps } from 'react';
import './Icon.scss';
interface IconProps {
    id?: 'Account' | 'Like' | 'LocationPin' | 'More' | 'Warning' | 'Close' | 'EditWrite' | 'Search' | 'Left' | 'Right' | 'Share' | 'More' | 'Clear' | 'Notification' | 'NotificationNone' | 'Filter' | 'Dropdown' | 'Home' | 'Group' | 'Chat' | 'Check' | 'Collapse' | 'Default';
    width?: number;
    height?: number;
    viewBox?: string;
    color?: string;
    style?: CSSProperties;
    fill?: string;
}
declare const Icon: ({ id, width, height, viewBox, color, fill, style, ...props }: IconProps & SVGProps<SVGSVGElement>) => React.JSX.Element;
export default Icon;
