import React, {CSSProperties} from 'react'
import classnames from 'classnames'

import './Basic.scss'

interface BasicProps {
  id?: string
  size?: 'md' | 'lg'
  type?: 'primary' | 'secondary'
  children?: unknown
  style?: CSSProperties
}

const Basic = ({
  id,
  size = 'lg',
  type = 'primary',
  children,
  ...props
}: BasicProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div id={id} className={classnames('list_container', size || 'lg', type || 'primary')}>
      {children}
    </div>
  )
}

export default Basic
