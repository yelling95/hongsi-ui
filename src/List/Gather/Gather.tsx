import React, { CSSProperties } from 'react'
import { Icon } from '../../Icon'
import classnames from 'classnames'

import './Gather.scss'

interface GatherProps {
  id?: string
  size?: 'md' | 'lg'
  disabled?: boolean
  children?: unknown
  style?: CSSProperties
	like?: boolean
	tagname?: string
	title?: string
	local?: string
	status?: string
	category?: string
	eventDtm?: string
	member?: number
	imgUrl?: string
  onClick?: () => void
	onClickLike?: () => void
}

const Gather = ({
	id,
	size = 'lg',
	disabled = false,
	like = false,
	tagname = '태그 이름',
	title = '타이틀은 두 줄 까지 작성하면 됩니다.',
	local = '서울시 강남구',
	status = '모집중',
	category = '여행',
	eventDtm = '10/13',
	member = 3,
	imgUrl = '',
	onClick = () => {},
	onClickLike = () => {}
}: GatherProps & React.HTMLAttributes<HTMLButtonElement>) => {
	return (
		<div id={id} className={classnames('gather_container', size || 'lg', disabled && 'disabled')}>
			<div className={classnames('img_box', (!imgUrl || imgUrl === '') && 'img_default')}>
				{imgUrl && <img src={imgUrl} width="100%" height="100%" onClick={onClick} />}
				<Icon
					id='Like'
					width={26}
					height={26}
					viewBox={'0 0 26 26'}
					color='#ffffff'
					fill={like ? '#393939' : undefined}
					onClick={onClickLike}
				/>
				<div className='message'>
					<div>
						<Icon
							id='Warning'
							width={13}
							height={13}
							color='#ffffff' />
					</div>
					<div className='text'>이미 종료된 모임</div>
				</div>
			</div>
			<div className='contents_box' onClick={onClick}>
				<div className='top'>
					<div className='tag'>{tagname}</div>
				</div>
				<div className='title limit-line-2'>{title}</div>
				<div className='bottom'>
					<div className='location'><Icon id='LocationPin' width={12} height={12} color={'#ABABAB'}/>{local} · {eventDtm}</div>
					<div className='process'>
						{status} · 멤버{member}명
					</div>
				</div>
			</div>
		</div>
	)
}

export default Gather