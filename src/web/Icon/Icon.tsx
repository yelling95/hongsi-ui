import React, { CSSProperties, SVGProps } from 'react'
import { AccountFull } from './svg'
import './Icon.scss'

const getIconSvg = (id: string, color: string) => {
	if (id === 'AccountFull') return <AccountFull color={color} />
}

interface IconProps {
  id?: string,
	type?: string,
	width?: number,
	height?: number,
	viewBox?: string,
	color?: string,
  style?: CSSProperties
}

const Icon = ({
	id = 'AccountFull',
	width = 24,
	height = 24,
	viewBox = '0 0 24 24',
	color = '#393939',
	style = {},
	...props
}: IconProps & SVGProps<SVGSVGElement>) => {
	
	return (
		<svg width={width} height={height} viewBox={viewBox} style={style} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			{getIconSvg(id, color)}
		</svg>
	)
}

export default Icon