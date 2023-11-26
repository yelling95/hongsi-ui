import React, { CSSProperties } from 'react'
import { Icon } from '../../Icon'
import classnames from 'classnames'
import './IconButton.scss'

interface IconButtonProps {
  id?: string
  type?:
		| 'Account'
		| 'Like'
		| 'LocationPin'
		| 'More',
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children?: unknown
  style?: CSSProperties
  onClick?: () => void
}

const IconButton = ({
	id,
	type = 'Like',
	size = 'sm',
	disabled = false,
	children = '',
	style = {},
	onClick = () => {},
	...props
}: IconButtonProps & React.HTMLAttributes<HTMLButtonElement>) => {
	
	return (
		<button
			id={id}
			className={classnames(
				'icon_button_container',
				size || 'sm',
			)}
			onClick={onClick}
			style={style}
			disabled={disabled}
			type="button"
			{...props}
		>
			<Icon id={type} color='#ABABAB' />{children}
		</button>
	)
}

export default IconButton