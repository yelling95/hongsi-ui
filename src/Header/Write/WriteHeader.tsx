import React from 'react'
import classnames from 'classnames'
import './WriteHeader.scss'

import {IconButton} from '../../Button'

interface WriteHeaderProps {
  goBack: () => void
  writeUrl?: string
  title?: string
}

const WriteHeader = ({
  goBack = () => {},
  writeUrl,
  title,
  ...props
}: WriteHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="header_container">
      <div className="back_wrap">
        <IconButton type="Right" size="sm" color="#393939" onClick={goBack} />
      </div>
      <div className="title">{title}</div>
      <div className="buttons_wrap">{writeUrl && <div>등록</div>}</div>
    </div>
  )
}

export default WriteHeader
