import React, { CSSProperties, ReactElement } from 'react';
import './Confirm.scss';
interface ConfirmButton {
    type?: 'primary' | 'secondary' | 'line';
    label?: string;
    click: () => void;
}
type ConfirmProps = {
    isShow?: boolean;
    isShowDimm?: boolean;
    buttonList?: Array<ConfirmButton>;
    children?: ReactElement;
    style?: CSSProperties;
    close?: () => void;
};
export default function Confirm({ isShow, isShowDimm, buttonList, children, style, close, }: ConfirmProps): React.JSX.Element;
export {};
