import React, { CSSProperties, SVGProps } from 'react'
import Svg from './svg'
import './Icon.scss'

const getIconSvg = (id: string, color: string, fill?: string) => {
	if (id === 'Account') return <Svg.Account color={color} />
	if (id === 'Like') return fill ? <Svg.LikeFull color={fill} /> : <Svg.Like color={color} />
	if (id === 'LocationPin') return <Svg.LocationPin color={color} />
	if (id === 'More') return <Svg.More color={color} />
	if (id === 'Warning') return <Svg.Warning color={color} />
	if (id === 'Close') return <Svg.Close color={color} />
	if (id === 'Default') return <Svg.Default color={color} />
}

interface IconProps {
  id?: 
		| 'Account'
		| 'Like'
		| 'LocationPin'
		| 'More'
		| 'Warning'
		| 'Close'
		| 'Default',
	width?: number,
	height?: number,
	viewBox?: string,
	color?: string,
  style?: CSSProperties,
	fill?: string
}

const Icon = ({
	id = 'Account',
	width = 24,
	height = 24,
	viewBox = '0 0 24 24',
	color = '#393939',
	fill,
	style = {},
	...props
}: IconProps & SVGProps<SVGSVGElement>) => {
	
	return (
		<svg width={width} height={height} viewBox={viewBox} style={style} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			{getIconSvg(id, color, fill)}
		</svg>
	)
}

export default Icon