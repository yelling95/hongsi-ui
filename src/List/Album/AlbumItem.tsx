import React, {CSSProperties} from 'react'

import './Album.scss'

interface AlbumItemProps {
  id?: string
  album: string
  photoCnt: number
  style?: CSSProperties
  onClick?: () => void
}

const AlbumItem = ({
  id,
  album,
  photoCnt,
  style,
  onClick = () => {},
}: AlbumItemProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div id={id} className="album_item_container" style={style} onClick={onClick}>
      <label className="album">{album}</label>
      <label className="count">{photoCnt}</label>
    </div>
  )
}

export default AlbumItem
