import React from 'react'
import './SearchHeader.scss'

import {IconButton} from '../../Button'
import {TextField} from '../../Input'

interface SearchHeaderProps {
  goBack: () => void
  disabled: boolean
}

const SearchHeader = ({
  goBack = () => {},
  disabled = false,
  ...props
}: SearchHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="search_header_container">
      <div className="back_wrap">
        <IconButton type="Right" size="sm" color="#393939" onClick={goBack} />
      </div>
      <div className="input_wrap">
        <TextField type="search" size="md" disabled={disabled} />
      </div>
    </div>
  )
}

export default SearchHeader
