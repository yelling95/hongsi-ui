import React, { CSSProperties } from 'react';
import './MoreOption.scss';
interface Option {
    id: string;
    label: string;
    click: () => void;
}
type MoreOptionProps = {
    isShow?: boolean;
    isShowDimm?: boolean;
    selected?: string;
    options?: Array<Option>;
    style?: CSSProperties;
    close?: () => void;
};
export default function MoreOption({ isShow, isShowDimm, selected, options, style, close, }: MoreOptionProps): React.JSX.Element;
export {};
