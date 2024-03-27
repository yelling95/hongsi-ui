import React from 'react';
import './Sheet.scss';
interface SheetProps {
    message: string;
    url?: string;
}
declare const Sheet: ({ message, url, ...props }: SheetProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default Sheet;
