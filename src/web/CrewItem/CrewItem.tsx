import React, { CSSProperties } from 'react'
import classnames from 'classnames'
import './CrewItem.scss'

interface CrewItemData {
	tagname: string
	title: string
	local: string
	status: string
	category: string
	eventDtm: string
	member: number
}


interface CrewItemProps {
  id?: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children?: unknown
  style?: CSSProperties
	data?: CrewItemData
  onClick?: () => void
}

const CrewItem = ({
	id,
	// size = 'md',
	// disabled = false,
	// data = {
	// 	tagname: '태그 이름',
	// 	title: '타이틀을 적어주세요',
	// 	local: '서울시 강남구',
	// 	status: '모집중',
	// 	category: '여행',
	// 	eventDtm: '10/13',
	// 	member: 3
	// },
	// style = {},
	// onClick = () => {},
	// ...props
}: CrewItemProps & React.HTMLAttributes<HTMLButtonElement>) => {
	
	return (
		<div id={id} className={classnames('crew_item_container')}>
			<div className='img_box'>
				
			</div>
		</div>
	)
}

export default CrewItem