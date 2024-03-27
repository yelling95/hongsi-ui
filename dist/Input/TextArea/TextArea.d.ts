import React, { CSSProperties } from 'react';
import './TextArea.scss';
type TextAreaProps = {
    id?: string;
    style?: CSSProperties;
    type?: 'default' | 'resize';
    className?: string;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    value?: string | undefined;
    label?: string | undefined;
    isState?: 'default' | 'error';
    errorMessage?: string | undefined;
    isRequired?: boolean | undefined;
    handleFocus?: boolean;
    onChange: (e: {
        id: string | null;
        value: string | undefined;
    }) => void;
};
declare function TextArea({ id, style, type, className, disabled, placeholder, value, label, isState, errorMessage, isRequired, handleFocus, onChange, ...props }: TextAreaProps): React.JSX.Element;
declare namespace TextArea {
    var defaultProps: {
        size: string;
        type: string;
        placeholder: string;
        handleFocus: boolean;
        onChange: () => void;
    };
}
export default TextArea;
