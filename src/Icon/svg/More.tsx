import React from 'react'
import SvgProps from './SvgProps'

const More = ({color = '#393939'} : SvgProps) => (
	<>
		<path fillRule="evenodd" clipRule="evenodd" d="M4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12Z" fill={color}/>
		<path fillRule="evenodd" clipRule="evenodd" d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z" fill={color}/>
		<path fillRule="evenodd" clipRule="evenodd" d="M16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12Z" fill={color}/>
	</>
)

export default More