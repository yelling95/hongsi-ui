import React, {CSSProperties} from 'react'
import classnames from 'classnames'
import {Icon} from '../Icon'

import './Snackbar.scss'

interface SnackbarProps {
  open: boolean
  message: string
  action: string
  icon: 'Check'
  onAction?: () => void
}

const Snackbar = ({
  open = true,
  message = '텍스트',
  action,
  icon,
  onAction = () => {},
  ...props
}: SnackbarProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className={classnames('snackbar_container', open && 'open')}>
      <div className="message_wrap">
        {icon && (
          <div className="icon_wrap">
            <Icon id={icon} color="#ffffff" />
          </div>
        )}
        {message}
      </div>
      <div className="button_wrap" onClick={onAction}>
        {action}
      </div>
    </div>
  )
}

export default Snackbar
