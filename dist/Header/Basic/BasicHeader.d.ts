import React from 'react';
import './BasicHeader.scss';
interface BasicHeaderProps {
    goBack: () => void;
    onSave: () => void;
    title?: string;
    mode?: string;
}
declare const BasicHeader: ({ goBack, title, ...props }: BasicHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default BasicHeader;
