import React from 'react'
import './SortHeader.scss'

import {IconButton} from '../../Button'

interface SortHeaderProps {
  order: string
  filter?: string
  onClickOrder: () => void
  onClickFilter?: () => void
}

const SortHeader = ({
  order = '최신순',
  filter,
  onClickOrder,
  onClickFilter,
  ...props
}: SortHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="sort_header_container">
      <div className="order_wrap">
        <IconButton
          type="Dropdown"
          size="md"
          iconWidth={20}
          iconHeight={20}
          iconStyle={{marginBottom: 4}}
          color="#ABABAB"
          onClick={onClickOrder}>
          {order}
        </IconButton>
      </div>
      {filter && (
        <div className="filter_wrap">
          <IconButton
            type="Filter"
            size="md"
            iconWidth={13}
            iconHeight={13}
            color="#ABABAB"
            onClick={onClickFilter}>
            {filter}
          </IconButton>
        </div>
      )}
    </div>
  )
}

export default SortHeader
