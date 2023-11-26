import React, { CSSProperties } from 'react'
import classnames from 'classnames'
import moment from 'moment'
import { Icon } from '../../Icon'

import './Chatting.scss'

interface ChattingProps {
  id?: string
  disabled?: boolean
  children?: unknown
  style?: CSSProperties
	imgUrl: string
	title: string
	lastMessage: string
	timestamp: string
	memberCnt: number
	unreadCnt: number
  onClick?: () => void
}

const Chatting = ({
	id,
	imgUrl = '',
	title = '프로등산러',
	lastMessage = '이번주는 청계산에 가려고 하는데 어디서 출발하실거에요?',
	timestamp = '2023-11-26 12:45:22',
	memberCnt = 5,
	unreadCnt = 120,
	onClick = () => {}
}: ChattingProps & React.HTMLAttributes<HTMLButtonElement>) => {
	return (
		<div id={id} className={classnames('chatting_container')} onClick={onClick}>
			<div className={classnames('img_box', (!imgUrl || imgUrl === '') && 'img_default')}>
				<Icon
					id='Default'
					width={25}
					height={25}
					color='#ABABAB'
				/>
				<label className={classnames('unread', unreadCnt > 99 && 'over')}>{unreadCnt > 99 ? '99+' : unreadCnt}</label>
			</div>
			<div className='contents_box'>
				<div className='top'>
					<div className='title'>{title}<label>{memberCnt}</label></div>
					<div className='timestamp'>{timestamp ? moment(timestamp, 'YYYY-MM-DD HH:mm:ss').format('HH:mm') : ''}</div>
				</div>
				<div className='message limit-line-2'>{lastMessage}</div>
			</div>
		</div>
	)
}

export default Chatting