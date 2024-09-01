import React from 'react'
import './BasicHeader.scss'

import {IconButton} from '../../Button'

interface BasicHeaderProps {
  goBack: () => void
  onSave: () => void
  title?: string
  mode?: string
}

const BasicHeader = ({
  goBack = () => {},
  title,
  ...props
}: BasicHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="basic_header_container">
      <div className="back_wrap">
        <IconButton type="Right" size="sm" color="#393939" onClick={goBack} />
      </div>
      <div className="title">{title}</div>
      <div className="buttons_wrap"></div>
    </div>
  )
}

export default BasicHeader
