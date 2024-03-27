import React from 'react';
import './HomeHeader.scss';
interface HomeHeaderProps {
    homeUrl: string;
    editUrl: string;
    searchUrl: string;
}
declare const HomeHeader: ({ homeUrl, editUrl, searchUrl, ...props }: HomeHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default HomeHeader;
