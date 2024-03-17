import React, {CSSProperties} from 'react'
import classnames from 'classnames'
import './TextButton.scss'

interface TextButtonProps {
  id?: string
  disabled?: boolean
  children?: unknown
  style?: CSSProperties
  onClick?: () => void
}

const TextButton = ({
  id,
  disabled = false,
  children = 'Button',
  style = {},
  onClick = () => {},
  ...props
}: TextButtonProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      id={id}
      className={classnames('button_container')}
      onClick={onClick}
      style={style}
      disabled={disabled}
      type="button"
      {...props}>
      {children}
    </button>
  )
}

export default TextButton
