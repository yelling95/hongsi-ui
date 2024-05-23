import React, {CSSProperties} from 'react'
import './Album.scss'

interface AlbumProps {
  id?: string
  style?: CSSProperties
  children?: unknown
}

const Album = ({id, style, children}: AlbumProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div id={id} className="album_container" style={style}>
      {children}
    </div>
  )
}

export default Album
