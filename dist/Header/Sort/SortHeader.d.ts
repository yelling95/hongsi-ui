import React from 'react';
import './SortHeader.scss';
interface SortHeaderProps {
    order: string;
    filter?: string;
    onClickOrder: () => void;
    onClickFilter?: () => void;
}
declare const SortHeader: ({ order, filter, onClickOrder, onClickFilter, ...props }: SortHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default SortHeader;
