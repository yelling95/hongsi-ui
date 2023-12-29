import React from 'react'
import classnames from 'classnames'
import './SearchHeader.scss'

import {IconButton} from '../../Button'

interface SearchHeaderProps {
  goBack: () => void
}

const SearchHeader = ({
  goBack = () => {},
  ...props
}: SearchHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="header_container">
      <div className="back_wrap">
        <IconButton type="Right" size="sm" color="#393939" onClick={goBack} />
      </div>
      <div className="input_wrap"></div>
    </div>
  )
}

export default SearchHeader
