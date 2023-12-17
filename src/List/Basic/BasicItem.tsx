import React, { CSSProperties } from 'react'
import classnames from 'classnames'
import {IconButton} from '../../Button' 

import './Basic.scss'

interface BasicItemProps {
  id?: string
  size?: 'md' | 'lg'
	title: string
  disabled?: boolean
  children?: unknown
  style?: CSSProperties
  onClick?: () => void
}

const BasicItem = ({
	id,
	size = 'lg',
	title = '제목',
	disabled = false,
	onClick = () => {},
}: BasicItemProps & React.HTMLAttributes<HTMLButtonElement>) => {
	return (
		<div id={id} className={classnames('item_container', size || 'lg', disabled && 'disabled')} onClick={onClick}>
			<label>{title}</label>
			<IconButton type={'Close'} color={'#393939'}/>
		</div>
	)
}

export default BasicItem