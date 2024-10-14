import React from 'react';
import './Snackbar.scss';
interface SnackbarProps {
    open: boolean;
    timeout?: number;
    message: string;
    action: string;
    icon: 'Check';
    onAction?: () => void;
    onTimeout?: () => void;
}
declare const Snackbar: ({ open, timeout, message, action, icon, onAction, onTimeout, ...props }: SnackbarProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default Snackbar;
