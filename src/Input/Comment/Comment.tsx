import classnames from 'classnames'
import React, {CSSProperties} from 'react'
import {Icon} from '../../Icon'
import {TextArea, TextButton} from '../..'

import './Comment.scss'

type CommentProps = {
  profileUrl: string
  style?: CSSProperties
  placeholder?: string | undefined
  value?: string | undefined
  onChange: (e: {id: string | null; value: string | undefined}) => void
}

export default function Comment({
  profileUrl = '',
  style,
  placeholder,
  value,
  onChange,
  ...props
}: CommentProps) {
  const csStyle: CSSProperties = style || {}

  return (
    <div className={classnames('comment_container')} style={csStyle}>
      <div className="comment_wrap">
        <div className={classnames('img_box', (!profileUrl || profileUrl === '') && 'img_default')}>
          {profileUrl && <img src={profileUrl} width="100%" height="100%" />}
          {(!profileUrl || profileUrl === '') && (
            <Icon id="Default" width={20} height={20} color="#ABABAB" />
          )}
        </div>
        <TextArea value={value} onChange={onChange} />
        <div className="button_wrap">
          <TextButton>등록</TextButton>
        </div>
      </div>
    </div>
  )
}

Comment.defaultProps = {}
