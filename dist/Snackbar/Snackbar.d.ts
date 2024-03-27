import React from 'react';
import './Snackbar.scss';
interface SnackbarProps {
    open: boolean;
    message: string;
    action: string;
    icon: 'Check';
    onAction?: () => void;
}
declare const Snackbar: ({ open, message, action, icon, onAction, ...props }: SnackbarProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default Snackbar;
