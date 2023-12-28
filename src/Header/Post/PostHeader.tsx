import React from 'react'
import classnames from 'classnames'
import './PostHeader.scss'

import {IconButton} from '../../Button'

interface Option {
  url: string
  label: string
}

interface PostHeaderProps {
  options: Array<Option>
}

const PostHeader = ({
  options = [],
  ...props
}: PostHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => {
  const goBack = () => {
    window.history.back()
  }

  const openShard = () => {}

  return (
    <div className="header_container">
      <div className="back_wrap">
        <IconButton type="Right" size="sm" color="#393939" onClick={goBack} />
      </div>
      <div className="buttons_wrap">
        <IconButton type="Share" size="sm" color="#393939" onClick={openShard} />
        <IconButton type="More" size="sm" color="#393939" onClick={() => {}} />
      </div>
    </div>
  )
}

export default PostHeader
