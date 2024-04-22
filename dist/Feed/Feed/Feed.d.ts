import React from 'react';
import './Feed.scss';
type FeedProps = {
    profileUrl?: string;
    username?: string;
    category?: string;
    timing?: string;
    title?: string;
    subtitle?: string;
    likeCnt?: number;
    chatCnt?: number;
    gather?: boolean;
    declare?: boolean;
    children?: any;
};
declare function Feed({ profileUrl, username, category, timing, title, subtitle, likeCnt, chatCnt, gather, declare, children, ...props }: FeedProps): React.JSX.Element;
declare namespace Feed {
    var defaultProps: {
        profileUrl: string;
        username: string;
        category: string;
        timing: string;
        title: string;
        subtitle: string;
        likeCnt: number;
        chatCnt: number;
        gather: boolean;
        declare: boolean;
    };
}
export default Feed;
