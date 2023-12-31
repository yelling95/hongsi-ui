import React from 'react'
import './SortHeader.scss'

import {IconButton} from '../../Button'

interface SortHeaderProps {}

const SortHeader = ({...props}: SortHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="sort_header_container">
      <div className="order_wrap">
        <IconButton type="Dropdown" size="md" iconWidth={20} iconHeight={20} color="#ABABAB">
          최신순
        </IconButton>
      </div>
      <div className="filter_wrap">
        <IconButton type="Filter" size="md" iconWidth={13} iconHeight={13} color="#ABABAB">
          전체
        </IconButton>
      </div>
    </div>
  )
}

export default SortHeader
