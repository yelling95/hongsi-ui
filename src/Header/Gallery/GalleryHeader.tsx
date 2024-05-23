import React from 'react'
import classnames from 'classnames'
import './GalleryHeader.scss'

import {Icon} from '../../Icon'
import {IconButton} from '../../Button'

interface GalleryHeaderProps {
  goBack: () => void
  onSelectImage: () => void
  onChangeAlbum: () => void
  album: string
  open: boolean
}

const GalleryHeader = ({
  goBack = () => {},
  onSelectImage = () => {},
  onChangeAlbum = () => {},
  album = '최근항목',
  open = false,
  ...props
}: GalleryHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="gallery_header_container">
      <div className="back_wrap">
        <IconButton type="Right" size="sm" color="#393939" onClick={goBack} />
      </div>
      <div className={classnames('title', open && 'open')}>
        {album} <Icon id="Dropdown" width={15} height={15} />
      </div>
      <div className="buttons_wrap" onClick={onSelectImage}>
        <div>완료</div>
      </div>
    </div>
  )
}

export default GalleryHeader
