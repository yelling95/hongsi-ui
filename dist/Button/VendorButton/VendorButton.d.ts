import React, { CSSProperties } from 'react';
import './VendorButton.scss';
interface VendorButtonProps {
    id?: string;
    type?: 'kakao' | 'naver' | 'apple';
    size?: 'sm' | 'lg';
    disabled?: boolean;
    style?: CSSProperties;
    children?: unknown;
    onClick?: () => void;
}
declare const VendorButton: ({ id, type, size, disabled, style, children, onClick, ...props }: VendorButtonProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default VendorButton;
