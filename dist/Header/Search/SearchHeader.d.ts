import React from 'react';
import './SearchHeader.scss';
interface SearchHeaderProps {
    goBack: () => void;
    disabled: boolean;
}
declare const SearchHeader: ({ goBack, disabled, ...props }: SearchHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default SearchHeader;
