import React from 'react';
import './Slick.scss';
import './Feed.scss';
interface sliderOpt {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    arrows: boolean;
}
interface FeedProps {
    profileUrl: string;
    username: string;
    category: string;
    timing: string;
    title: string;
    subtitle: string;
    likeCnt: number;
    chatCnt: number;
    sliderOpt: sliderOpt;
    gather: boolean;
    declare: boolean;
    children: any;
}
declare function Feed({ profileUrl, username, category, timing, title, subtitle, likeCnt, chatCnt, sliderOpt, gather, declare, children, ...props }: FeedProps): React.JSX.Element;
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
        sliderOpt: {
            dots: boolean;
            infinite: boolean;
            speed: number;
            slidesToShow: number;
            slidesToScroll: number;
            arrows: boolean;
        };
        gather: boolean;
        declare: boolean;
    };
}
export default Feed;
