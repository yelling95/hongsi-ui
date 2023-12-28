import React, { CSSProperties } from 'react'
import classnames from 'classnames'
import './Tag.scss'

interface TagProps {
  id?: string
  size?: 'sm' | 'md'
  selected?: boolean
  children?: unknown
  style?: CSSProperties
  onClick?: () => void
}

const Tag = ({
	id,
	size = 'sm',
	selected = false,
	children = 'Tag',
	style = {},
	onClick = () => {},
	...props
}: TagProps & React.HTMLAttributes<HTMLButtonElement>) => {
	
	return (
		<button
			id={id}
			className={classnames(
				'tag_container',
				size || 'lg',
				selected && 'selected'
			)}
			onClick={onClick}
			style={style}
			{...props}
		>
			{children}
		</button>
	)
}

export default Tag