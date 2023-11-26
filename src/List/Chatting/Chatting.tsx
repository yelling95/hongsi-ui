import React, { CSSProperties } from 'react'
import classnames from 'classnames'

import './Chatting.scss'

interface ChattingData {
	imgUrl: string
}

interface ChattingProps {
  id?: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children?: unknown
  style?: CSSProperties
	data?: ChattingData
  onClick?: () => void
}

const Chatting = ({
	id,
	size = 'lg',
	data = {
		imgUrl: '',
	},
	onClick = () => {}
}: ChattingProps & React.HTMLAttributes<HTMLButtonElement>) => {
	return (
		<div id={id} className={classnames('chatting_container', size || 'lg')} onClick={onClick}>
			<div className={classnames('img_box', (!data?.imgUrl || data.imgUrl === '') && 'img_default')}>
				
			</div>
		</div>
	)
}

export default Chatting