import React from 'react';
import './WriteHeader.scss';
interface WriteHeaderProps {
    goBack: () => void;
    onSave: () => void;
    title?: string;
    mode?: string;
}
declare const WriteHeader: ({ goBack, onSave, title, mode, ...props }: WriteHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default WriteHeader;
