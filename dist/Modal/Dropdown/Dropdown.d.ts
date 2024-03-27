import React, { CSSProperties } from 'react';
import './Dropdown.scss';
interface Option {
    id: string;
    label: string;
    click: () => void;
}
type DropdownProps = {
    isShow?: boolean;
    isShowDimm?: boolean;
    selected?: string;
    options?: Array<Option>;
    style?: CSSProperties;
    close?: () => void;
};
export default function Dropdown({ isShow, isShowDimm, selected, options, style, close, }: DropdownProps): React.JSX.Element;
export {};
