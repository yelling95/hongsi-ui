import React, { CSSProperties } from 'react'
import classnames from 'classnames'
import Item from './BasicItem'

import './Basic.scss'

interface BasicProps {
  id?: string
  size?: 'md' | 'lg'
	type?:
    | 'primary'
    | 'secondary'
  children?: unknown
  style?: CSSProperties
}

const Basic = ({
	id,
	size = 'lg',
	type = 'primary'
}: BasicProps & React.HTMLAttributes<HTMLButtonElement>) => {
	return (
		<div id={id} className={classnames('list_container', size || 'lg', type || 'primary')}>
			<Item title={'제목1'} />
			<Item title={'제목2'} />
			<Item title={'제목3'} />
			<Item title={'제목4'} />
			<Item title={'제목5'} />
		</div>
	)
}

export default Basic