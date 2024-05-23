import React from 'react'
import classnames from 'classnames'
import './WriteHeader.scss'

import {IconButton} from '../../Button'

interface WriteHeaderProps {
  goBack: () => void
  onSave: () => void
  title?: string
  mode?: string
}

const WriteHeader = ({
  goBack = () => {},
  onSave,
  title,
  mode = 'view',
  ...props
}: WriteHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="write_header_container">
      <div className="back_wrap">
        <IconButton type="Right" size="sm" color="#393939" onClick={goBack} />
      </div>
      <div className="title">{title}</div>
      <div className="buttons_wrap">{mode != 'view' && <div onClick={onSave}>등록</div>}</div>
    </div>
  )
}

export default WriteHeader
