import React from 'react';
import './ChattingHeader.scss';
interface ChattingHeaderProps {
    goBack: () => void;
    openMore: () => void;
    title?: string;
    searchUrl?: string;
    alarmFg: boolean;
}
declare const ChattingHeader: ({ goBack, openMore, title, searchUrl, alarmFg, ...props }: ChattingHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default ChattingHeader;
