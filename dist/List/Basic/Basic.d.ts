import React, { CSSProperties } from 'react';
import './Basic.scss';
interface BasicProps {
    id?: string;
    size?: 'md' | 'lg';
    type?: 'primary' | 'secondary';
    children?: unknown;
    style?: CSSProperties;
}
declare const Basic: ({ id, size, type }: BasicProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default Basic;
