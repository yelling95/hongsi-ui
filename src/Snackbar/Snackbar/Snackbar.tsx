import React, {CSSProperties} from 'react'
import classnames from 'classnames'
import {Icon} from '../../Icon'

import './Snackbar.scss'

interface SnackbarProps {
  open: boolean
  timeout?: number
  message: string
  action: string
  icon: 'Check'
  onAction?: () => void
  onTimeout?: () => void
}

const Snackbar = ({
  open = true,
  timeout,
  message = '텍스트',
  action,
  icon,
  onAction = () => {},
  onTimeout = () => {},
  ...props
}: SnackbarProps & React.HTMLAttributes<HTMLButtonElement>) => {
  const [expire, setExpire] = React.useState(false)

  React.useEffect(() => {
    if (open && timeout) {
      setTimeout(() => {
        setExpire(true)
        onTimeout()
      }, timeout)
    }
  }, [open])
  return (
    <div className={classnames('snackbar_container', open && 'open', expire && 'expire')}>
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
