import React, { CSSProperties } from 'react';
import './Dropdown.scss';
interface Option {
    id: string;
    label: string;
    click: () => void;
}
type DropdownProps = {
    id?: string;
    isShow?: boolean;
    isShowDimm?: boolean;
    selected?: string;
    options?: Array<Option>;
    style?: CSSProperties;
    close?: () => void;
};
export default function Dropdown({ id, isShow, isShowDimm, selected, options, style, close, }: DropdownProps): React.JSX.Element;
export {};
