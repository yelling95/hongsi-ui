import React from 'react'
import SvgProps from './SvgProps'

const AccountFull = ({color = '#393939'} : SvgProps) => (
	<>
		<path d="M5.75988 19.8248C6.9173 17.5547 9.27709 16 12 16C14.7019 16 17.0462 17.5308 18.2131 19.7723M14.3333 10.4444C14.3333 11.7945 13.2389 12.8889 11.8889 12.8889C10.5389 12.8889 9.44444 11.7945 9.44444 10.4444C9.44444 9.09442 10.5389 8 11.8889 8C13.2389 8 14.3333 9.09442 14.3333 10.4444ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		<circle cx="12" cy="10" r="2" fill={color}/>
		<path d="M12 16C9.2 16 6.83333 18 6 19C11.2 23.4 15.8333 20.8333 17.5 19C16.8333 18 14.8 16 12 16Z" fill={color}/>
	</>
)

export default AccountFull