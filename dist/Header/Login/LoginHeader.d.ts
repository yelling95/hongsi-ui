import React from 'react';
import './LoginHeader.scss';
interface LoginHeaderProps {
    goBack: () => void;
    onSave: () => void;
    title?: string;
    mode?: string;
}
declare const LoginHeader: ({ goBack, onSave, title, mode, ...props }: LoginHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default LoginHeader;
