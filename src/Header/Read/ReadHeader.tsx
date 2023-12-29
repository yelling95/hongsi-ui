import React from 'react'
import './ReadHeader.scss'

import {IconButton} from '../../Button'

interface ReadHeaderProps {
  goBack: () => void
  openShard: () => void
  openMore: () => void
}

const ReadHeader = ({
  goBack = () => {},
  openShard = () => {},
  openMore = () => {},
  ...props
}: ReadHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="header_container">
      <div className="back_wrap">
        <IconButton type="Right" size="sm" color="#393939" onClick={goBack} />
      </div>
      <div className="buttons_wrap">
        <IconButton type="Share" size="sm" color="#393939" onClick={openShard} />
        <IconButton type="More" size="sm" color="#393939" onClick={openMore} />
      </div>
    </div>
  )
}

export default ReadHeader
