import React from 'react'
import './ChattingHeader.scss'

import {IconButton} from '../../Button'

interface ChattingHeaderProps {
  goBack: () => void
  openMore: () => void
  title?: string
  searchUrl?: string
  alarmFg: boolean
}

const ChattingHeader = ({
  goBack = () => {},
  openMore = () => {},
  title = '제목',
  searchUrl = '',
  alarmFg = true,
  ...props
}: ChattingHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => {
  const goSearch = () => {
    window.location.href = searchUrl
  }

  const setAlarm = () => {}

  return (
    <div className="chatting_header_container">
      <div className="back_wrap">
        <IconButton type="Right" size="sm" color="#393939" onClick={goBack} />
        <div className="title">{title}</div>
      </div>
      <div className="buttons_wrap">
        <IconButton
          type={alarmFg ? 'Notification' : 'NotificationNone'}
          size="sm"
          fill="#393939"
          color="#393939"
          onClick={setAlarm}
        />
        <IconButton type="Search" size="sm" color="#393939" onClick={goSearch} />
        <IconButton type="More" size="sm" color="#393939" onClick={openMore} />
      </div>
    </div>
  )
}

export default ChattingHeader
