import React from 'react';
import './Slick.scss';
import './Feed.scss';
type Image = {
    url: string;
    desc: string;
};
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
    imgList: Array<Image>;
    title: string;
    subtitle: string;
    likeCnt: number;
    chatCnt: number;
    sliderOpt: sliderOpt;
    gather: boolean;
    declare: boolean;
}
declare const Feed: ({ profileUrl, username, category, timing, imgList, title, subtitle, likeCnt, chatCnt, sliderOpt, gather, declare, ...props }: FeedProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default Feed;
