import React from 'react'
import classnames from 'classnames'
import {Icon} from '../../Icon'
import {GatherListItem as Gather} from '../../List'

import './Feed.scss'

type FeedProps = {
  profileUrl?: string
  username?: string
  category?: string
  timing?: string
  title?: string
  subtitle?: string
  likeCnt?: number
  chatCnt?: number
  gather?: boolean
  declare?: boolean
  children?: any
  onClickLike?: () => void
  onClickChat?: () => void
  onClickMore?: () => void
}

export default function Feed({
  profileUrl,
  username,
  category,
  timing,
  title,
  subtitle,
  likeCnt,
  chatCnt,
  gather,
  declare,
  children,
  onClickLike,
  onClickChat,
  onClickMore,
  ...props
}: FeedProps) {
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
          <Icon id="More" color="#ABABAB" onClick={onClickMore} />
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
        {children}
      </div>
      <div className={classnames('gather_wrap', isHideContents && 'hide')}>
        {gather && <Gather size="md" />}
      </div>
      <div className="footer_wrap">
        <div className={classnames('status_wrap', 'like')} onClick={onClickLike}>
          <Icon id="Like" color="#676767" />
          <span>{likeCnt}</span>
        </div>
        <div className={classnames('status_wrap', 'chat')} onClick={onClickChat}>
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

Feed.defaultProps = {
  profileUrl: '',
  username: '홍길동',
  category: '주제',
  timing: '3분 전',
  title: '타이틀을 적어주세요.',
  subtitle:
    '서브타이틀은 두 줄이 최대로 적어주시면 됩니다. 서브타이틀은 두 줄이 최대로 적어주세요.',
  likeCnt: 0,
  chatCnt: 0,
  gather: false,
  declare: false,
  onClickLike: () => {},
  onClickChat: () => {},
  onClickMore: () => {},
}
