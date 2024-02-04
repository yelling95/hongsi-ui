import React, {CSSProperties} from 'react'
import classnames from 'classnames'
import Slider from 'react-slick'
import {Icon} from '../../Icon'
import {GatherListItem as Gather} from '../../List'
import {map} from 'lodash-es'

import './Slick.scss'
import './Feed.scss'

interface Image {
  url: string
  desc: string
}

interface sliderOpt {
  dots: boolean
  infinite: boolean
  speed: number
  slidesToShow: number
  slidesToScroll: number
  arrows: boolean
}

interface FeedProps {
  profileUrl: string
  username: string
  category: string
  timing: string
  imgList: Array<Image>
  title: string
  subtitle: string
  likeCnt: number
  chatCnt: number
  sliderOpt: sliderOpt
  gather: boolean
  declare: boolean
}

const Feed = ({
  profileUrl = '',
  username = '홍길동',
  category = '주제',
  timing = '3분 전',
  imgList = [],
  title = '타이틀을 적어주세요.',
  subtitle = '서브타이틀은 두 줄이 최대로 적어주시면 됩니다. 서브타이틀은 두 줄이 최대로 적어주세요.',
  likeCnt = 0,
  chatCnt = 0,
  sliderOpt = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  },
  gather = false,
  declare = false,
  ...props
}: FeedProps & React.HTMLAttributes<HTMLButtonElement>) => {
  const [isHideContents, setHideContents] = React.useState(false)

  React.useEffect(() => {
    if (declare) {
      setHideContents(true)
    }
  }, [declare])

  return (
    <div className="feed_container">
      <div className="header_wrap">
        <div className={classnames('img_box', (!profileUrl || profileUrl === '') && 'img_default')}>
          {profileUrl && <img src={profileUrl} width="100%" height="100%" />}
          {(!profileUrl || profileUrl === '') && (
            <Icon id="Default" width={20} height={20} color="#ABABAB" />
          )}
        </div>
        <div className="user_wrap">
          <div className="name">{username}</div>
          <div className="extra">
            {category} · {timing}
          </div>
        </div>
        <div className="more">
          <Icon id="More" color="#ABABAB" />
        </div>
      </div>
      <div
        className={classnames(
          'declare_wrap',
          declare && 'show',
          !isHideContents && 'show_contents',
        )}>
        <div className="message">내가 신고한 게시글 입니다.</div>
        <div
          className={classnames('collapse', !isHideContents && 'close')}
          onClick={() => setHideContents(!isHideContents)}>
          <span>글보기</span>
          <Icon id="Collapse" width={13} height={10} viewBox="0 0 13 10" color="#ABABAB" />
        </div>
      </div>
      <div className={classnames('body_wrap', isHideContents && 'hide')}>
        <div className="title">{title}</div>
        <SubTitle subtitle={subtitle} />
        {imgList && imgList.length > 0 && (
          <div className="slider_wrap">
            <Slider {...sliderOpt}>
              {map(imgList, (img, index) => {
                return (
                  <div key={`slider-img-${index}`} className="img_wrap">
                    <div style={{backgroundImage: `url('${img.url}')`}}></div>
                  </div>
                )
              })}
            </Slider>
          </div>
        )}
      </div>
      <div className={classnames('gather_wrap', isHideContents && 'hide')}>
        {gather && <Gather size="md" />}
      </div>
      <div className="footer_wrap">
        <div className={classnames('status_wrap', 'like')}>
          <Icon id="Like" color="#676767" />
          <span>{likeCnt}</span>
        </div>
        <div className={classnames('status_wrap', 'chat')}>
          <Icon id="Chat" color="#676767" />
          <span>{chatCnt}</span>
        </div>
      </div>
    </div>
  )
}

const SubTitle = ({subtitle = ''}) => {
  const [showAll, setShowAll] = React.useState(false)
  return showAll === false && subtitle.length > 35 ? (
    <div>
      {subtitle.substring(0, 35)}...
      <a href="#none" title="더 보기" onClick={() => setShowAll(true)}>
        더 보기
      </a>
    </div>
  ) : (
    <div>{subtitle}</div>
  )
}

export default Feed
