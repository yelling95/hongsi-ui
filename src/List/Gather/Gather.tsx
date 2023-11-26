import React, { CSSProperties } from 'react'
import { Icon } from '../../Icon'
import classnames from 'classnames'

import './Gather.scss'
import { IconButton } from '../../Button'

interface GatherData {
	tagname: string
	title: string
	local: string
	status: string
	category: string
	eventDtm: string
	member: number
	imgUrl: string
}


interface GatherProps {
  id?: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children?: unknown
  style?: CSSProperties
	data?: GatherData
	like?: boolean
  onClick?: () => void
	onClickLike?: () => void
}

const Gather = ({
	id,
	size = 'lg',
	disabled = false,
	like = false,
	data = {
		tagname: '태그 이름',
		title: '타이틀을 적어주세요',
		local: '서울시 강남구',
		status: '모집중',
		category: '여행',
		eventDtm: '10/13',
		member: 3,
		imgUrl: ''
	},
	onClick = () => {},
	onClickLike = () => {}
}: GatherProps & React.HTMLAttributes<HTMLButtonElement>) => {
	return (
		<div id={id} className={classnames('gather_container', size || 'lg', disabled && 'disabled')}>
			<div className={classnames('img_box', (!data?.imgUrl || data.imgUrl === '') && 'img_default')}>
				{data?.imgUrl && <img src={data?.imgUrl} width="100%" height="100%" onClick={onClick} />}
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
				<div>
					<div className='top'>
						<div className='tag'>{data?.tagname}</div>
						<IconButton id={id + '-more'} type='More'/>
					</div>
					<div className='title'>{data?.title}</div>
				</div>
				<div className='bottom'>
					<div className='location'><Icon id='LocationPin' width={12} height={12} color={'#ABABAB'}/>{data?.local} · {data?.eventDtm}</div>
					<div className='process'>
						{data?.status} · 멤버{data?.member}명
					</div>
				</div>
			</div>
		</div>
	)
}

export default Gather