import React from 'react';
import './Footer.scss';
interface Menu {
    id: string;
    icon?: 'Home' | 'Group' | 'Chat' | 'Account';
    active: boolean;
    unread: number;
    unreadStyle?: 'default' | 'number';
    onClick?: () => void;
}
interface FooterProps {
    menuList: Array<Menu>;
}
declare const Footer: ({ menuList, ...props }: FooterProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default Footer;
