import React, {CSSProperties} from 'react'
import classnames from 'classnames'
import './Tag.scss'

interface TagProps {
  id?: string
  size?: 'lg' | 'md' | 'sm'
  selected?: boolean
  children?: unknown
  style?: CSSProperties
  onClick?: () => void
}

const Tag = ({
  id,
  size = 'lg',
  selected = false,
  children = 'Tag',
  style = {},
  onClick = () => {},
  ...props
}: TagProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      id={id}
      className={classnames('tag_container', size || 'lg', selected && 'selected')}
      onClick={onClick}
      style={style}
      {...props}>
      {children}
    </button>
  )
}

export default Tag
