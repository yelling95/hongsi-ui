import React, { CSSProperties, SVGProps } from 'react';
import './Icon.scss';
interface IconProps {
    id?: 'Account' | 'Add' | 'All' | 'Calendar' | 'Camera' | 'Chat' | 'Check' | 'Clear' | 'Close' | 'Collapse' | 'Default' | 'Dropdown' | 'EditWrite' | 'Empty' | 'Filter' | 'Group' | 'Home' | 'Left' | 'Right' | 'Like' | 'LocationPin' | 'More' | 'Warning' | 'Notification' | 'NotificationNone' | 'Photo' | 'Search' | 'Send' | 'Share' | 'Time' | 'Warning';
    width?: number;
    height?: number;
    viewBox?: string;
    color?: string;
    style?: CSSProperties;
    fill?: string;
}
declare const Icon: ({ id, width, height, viewBox, color, fill, style, ...props }: IconProps & SVGProps<SVGSVGElement>) => React.JSX.Element;
export default Icon;
