import React, {CSSProperties} from 'react'
import {Icon} from '../../Icon'
import {Tag} from '../../Tag'
import classnames from 'classnames'

import './Gather.scss'

interface GatherProps {
  id?: string
  size?: 'md' | 'lg'
  disabled?: boolean
  children?: unknown
  style?: CSSProperties
  like?: boolean
  tagname?: string
  title?: string
  local?: string
  eventDtm?: string
  member?: number
  imgUrl?: string
  message?: string
  onClick?: () => void
  onClickLike?: () => void
}

const Gather = ({
  id,
  size = 'lg',
  disabled = false,
  like = false,
  tagname = '태그 이름',
  title = '타이틀은 두 줄 까지 작성하면 됩니다.',
  local = '강남구',
  eventDtm = '12월 12일 오후 5:00',
  member = 3,
  imgUrl = 'https://cdn.eroun.net/news/photo/201904/5248_19828_3216.jpg',
  message = '종료된 모임',
  onClick = () => {},
  onClickLike = () => {},
}: GatherProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div id={id} className={classnames('gather_container', size || 'lg', disabled && 'disabled')}>
      <div className={classnames('img_box', (!imgUrl || imgUrl === '') && 'img_default')}>
        {imgUrl && <img src={imgUrl} width="100%" height="100%" onClick={onClick} />}
        <Icon
          id="Like"
          width={26}
          height={26}
          viewBox={'0 0 26 26'}
          color="#ffffff"
          fill={like ? '#393939' : undefined}
          onClick={onClickLike}
        />
        <div className="message">
          <div>
            <Icon id="Warning" width={13} height={13} color="#ffffff" />
          </div>
          <div className="text">{message}</div>
        </div>
      </div>
      <div className="contents_box" onClick={onClick}>
        <div className="top">
          <Tag size={size === 'lg' ? 'md' : 'sm'} />
        </div>
        <div className="title limit-line-2">{title}</div>
        <div className="bottom">
          <div className="info">
            <span>
              <Icon id="LocationPin" width={12} height={12} color={'#393939'} /> {local}
            </span>
            {` · ${eventDtm} · 멤버${member}명`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gather
