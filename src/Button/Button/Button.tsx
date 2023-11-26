import React, { CSSProperties } from 'react'
import classnames from 'classnames'
import './Button.scss'

interface ButtonProps {
  id?: string
  type?:
    | 'primary'
    | 'secondary'
    | 'line'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children?: unknown
  style?: CSSProperties
  onClick?: () => void
}

const Button = ({
	id,
	type = 'primary',
	size = 'md',
	disabled = false,
	children = 'Button',
	style = {},
	onClick = () => {},
	...props
}: ButtonProps & React.HTMLAttributes<HTMLButtonElement>) => {
	
	return (
		<button
			id={id}
			className={classnames(
				'button_container',
				type || 'primary',
				size || 'lg',
			)}
			onClick={onClick}
			style={style}
			disabled={disabled}
			type="button"
			{...props}
		>
			{children}
		</button>
	)
}

export default Button