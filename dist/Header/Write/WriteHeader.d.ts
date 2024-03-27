import React from 'react';
import './WriteHeader.scss';
interface WriteHeaderProps {
    goBack: () => void;
    writeUrl?: string;
    title?: string;
}
declare const WriteHeader: ({ goBack, writeUrl, title, ...props }: WriteHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default WriteHeader;
