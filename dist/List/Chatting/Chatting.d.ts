import React, { CSSProperties } from 'react';
import './Chatting.scss';
interface ChattingProps {
    id?: string;
    disabled?: boolean;
    children?: unknown;
    style?: CSSProperties;
    imgUrl: string;
    title: string;
    lastMessage: string;
    timestamp: string;
    memberCnt: number;
    unreadCnt: number;
    onClick?: () => void;
}
declare const Chatting: ({ id, imgUrl, title, lastMessage, timestamp, memberCnt, unreadCnt, onClick, }: ChattingProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default Chatting;
