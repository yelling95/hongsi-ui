import React, { CSSProperties } from 'react';
import './TextField.scss';
interface Option {
    id: string;
    label: string;
}
type TextFieldProps = {
    id?: string;
    size?: 'lg' | 'md' | 'sm';
    style?: CSSProperties;
    type?: 'default' | 'search' | 'number' | 'numberOnly' | 'decimal' | 'phone' | 'post' | 'password';
    className?: string;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    value?: string | undefined;
    label?: string | undefined;
    isState?: 'default' | 'error';
    errorMessage?: string | undefined;
    isRequired?: boolean | undefined;
    hasStartAdornment?: boolean;
    startAdornmentEl?: any;
    hasEndAdornment?: boolean;
    endAdornmentEl?: any;
    handleFocus?: boolean;
    isShowClear?: boolean;
    regExp?: RegExp;
    options?: Array<Option>;
    onChange: (e: {
        id: string | null;
        value: string | undefined;
    }) => void;
    onSelectOption?: (option: Option) => void;
};
declare function TextField({ id, size, style, type, className, disabled, placeholder, value, label, isState, errorMessage, isRequired, hasStartAdornment, startAdornmentEl, hasEndAdornment, endAdornmentEl, handleFocus, isShowClear, regExp, options, onChange, onSelectOption, ...props }: TextFieldProps): React.JSX.Element;
declare namespace TextField {
    var defaultProps: {
        size: string;
        type: string;
        placeholder: string;
        handleFocus: boolean;
        isShowClear: boolean;
        regExp: undefined;
        onChange: () => void;
    };
}
export default TextField;
