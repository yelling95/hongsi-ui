import React from 'react';
import './SearchHeader.scss';
interface SearchHeaderProps {
    goBack: () => void;
    disabled: boolean;
    value?: string | undefined;
    onChange: (e: {
        id: string | null;
        value: string | undefined;
    }) => void;
}
declare const SearchHeader: ({ goBack, disabled, value, onChange, ...props }: SearchHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default SearchHeader;
