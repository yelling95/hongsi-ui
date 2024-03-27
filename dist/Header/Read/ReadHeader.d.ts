import React from 'react';
import './ReadHeader.scss';
interface ReadHeaderProps {
    goBack: () => void;
    openShard: () => void;
    openMore: () => void;
}
declare const ReadHeader: ({ goBack, openShard, openMore, ...props }: ReadHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default ReadHeader;
