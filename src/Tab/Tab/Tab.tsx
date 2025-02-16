import React, {CSSProperties} from 'react'
import classnames from 'classnames'
import './Tab.scss'
import {map} from 'lodash-es'

export interface TabItem {
  id: string
  label: string
}

interface TabProps {
  id?: string
  selected?: string
  data: Array<TabItem>
  style?: CSSProperties
  onClick?: (tabItem: TabItem) => void
}

const Tab = ({id, selected = '01', data = [], style = {}, onClick = (tabItem) => {}}: TabProps) => {
  return (
    <div id={id} className={classnames('tab_group_container')} style={style}>
      {map(data, (t) => (
        <div
          key={t.id}
          id={`tab-${t.id}`}
          className={classnames('tab_container', selected === t.id && 'selected')}
          onClick={() => onClick(t)}>
          {t.label}
        </div>
      ))}
    </div>
  )
}

export default Tab
