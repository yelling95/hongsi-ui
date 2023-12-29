import React from 'react'
import SvgProps from './SvgProps'

const Clear = ({color = '#ABABAB'}: SvgProps) => (
  <>
    <circle cx="8" cy="8" r="8" fill={color} />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.14645 4.14645C4.34171 3.95118 4.65829 3.95118 4.85355 4.14645L8 7.29289L11.1464 4.14645C11.3417 3.95118 11.6583 3.95118 11.8536 4.14645C12.0488 4.34171 12.0488 4.65829 11.8536 4.85355L8.70711 8L11.8536 11.1464C12.0488 11.3417 12.0488 11.6583 11.8536 11.8536C11.6583 12.0488 11.3417 12.0488 11.1464 11.8536L8 8.70711L4.85355 11.8536C4.65829 12.0488 4.34171 12.0488 4.14645 11.8536C3.95118 11.6583 3.95118 11.3417 4.14645 11.1464L7.29289 8L4.14645 4.85355C3.95118 4.65829 3.95118 4.34171 4.14645 4.14645Z"
      fill="#EFEFEF"
    />
  </>
)

export default Clear
