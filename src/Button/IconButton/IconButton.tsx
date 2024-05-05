import React, {CSSProperties} from 'react'
import {Icon} from '../../Icon'
import classnames from 'classnames'
import './IconButton.scss'

interface IconButtonProps {
  id?: string
  type?:
    | 'Account'
    | 'Add'
    | 'All'
    | 'Calendar'
    | 'Camera'
    | 'Chat'
    | 'Check'
    | 'Clear'
    | 'Close'
    | 'Collapse'
    | 'Default'
    | 'Dropdown'
    | 'EditWrite'
    | 'Empty'
    | 'Filter'
    | 'Group'
    | 'Home'
    | 'Left'
    | 'Right'
    | 'Like'
    | 'LocationPin'
    | 'More'
    | 'Warning'
    | 'Notification'
    | 'NotificationNone'
    | 'Photo'
    | 'Search'
    | 'Send'
    | 'Share'
    | 'Time'
    | 'Warning'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children?: unknown
  color?: string
  style?: CSSProperties
  fill?: string
  iconWidth?: number
  iconHeight?: number
  onClick?: () => void
}

const IconButton = ({
  id,
  type = 'Like',
  size = 'sm',
  disabled = false,
  children = '',
  color = '#ABABAB',
  fill,
  iconWidth,
  iconHeight,
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
      <Icon
        id={type}
        color={color}
        fill={fill}
        width={iconWidth}
        height={iconHeight}
        viewBox={
          iconWidth !== undefined && iconHeight !== undefined
            ? `0 0 ${iconWidth} ${iconHeight}`
            : '0 0 24 24'
        }
        transform={type === 'Right' ? 'rotate(180)' : 'rotate(0)'}
      />
      {children}
    </button>
  )
}

export default IconButton
