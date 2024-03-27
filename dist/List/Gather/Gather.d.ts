import React, { CSSProperties } from 'react';
import './Gather.scss';
interface GatherProps {
    id?: string;
    size?: 'md' | 'lg';
    disabled?: boolean;
    children?: unknown;
    style?: CSSProperties;
    like?: boolean;
    tagname?: string;
    title?: string;
    local?: string;
    eventDtm?: string;
    member?: number;
    imgUrl?: string;
    message?: string;
    onClick?: () => void;
    onClickLike?: () => void;
}
declare const Gather: ({ id, size, disabled, like, tagname, title, local, eventDtm, member, imgUrl, message, onClick, onClickLike, }: GatherProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default Gather;
