import React, { CSSProperties } from 'react';
import './Tab.scss';
export interface TabItem {
    id: string;
    label: string;
}
interface TabProps {
    id?: string;
    selected?: string;
    data: Array<TabItem>;
    style?: CSSProperties;
    onClick?: () => void;
}
declare const Tab: ({ id, selected, data, style, onClick, }: TabProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default Tab;
