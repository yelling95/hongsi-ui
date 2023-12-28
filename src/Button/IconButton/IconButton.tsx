import React, {CSSProperties} from 'react'
import {Icon} from '../../Icon'
import classnames from 'classnames'
import './IconButton.scss'

interface IconButtonProps {
  id?: string
  type?:
    | 'Account'
    | 'Like'
    | 'LocationPin'
    | 'More'
    | 'Warning'
    | 'Close'
    | 'EditWrite'
    | 'Search'
    | 'Left'
    | 'Right'
    | 'Share'
    | 'More'
    | 'Default'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children?: unknown
  color?: string
  style?: CSSProperties
  onClick?: () => void
}

const IconButton = ({
  id,
  type = 'Like',
  size = 'sm',
  disabled = false,
  children = '',
  color = '#ABABAB',
  style = {},
  onClick = () => {},
  ...props
}: IconButtonProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      id={id}
      className={classnames('icon_button_container', size || 'sm')}
      onClick={onClick}
      style={style}
      disabled={disabled}
      type="button"
      {...props}>
      <Icon id={type} color={color} transform={type === 'Right' ? 'rotate(180)' : 'rotate(0)'} />
      {children}
    </button>
  )
}

export default IconButton
