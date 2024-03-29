import React, {CSSProperties} from 'react'
import parser from 'html-react-parser'
import {Icon} from '../../Icon'

import './Sheet.scss'

interface SheetProps {
  message: string
  url?: string
}

const Sheet = ({message, url, ...props}: SheetProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="sheet_container">
      <div className="message_wrap">{message && parser(message)}</div>
      {url && <Icon id="Left" />}
    </div>
  )
}

export default Sheet
