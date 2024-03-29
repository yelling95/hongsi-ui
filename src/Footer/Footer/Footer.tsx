import React, {CSSProperties} from 'react'
import classnames from 'classnames'
import {Icon} from '../../Icon'
import {map} from 'lodash-es'

import './Footer.scss'

interface Menu {
  id: string
  path: string
  icon?: 'Home' | 'Group' | 'Chat' | 'Account'
  active: boolean
  unread: number
  unreadStyle?: 'default' | 'number'
  onClick?: () => void
}

interface FooterProps {
  menuList: Array<Menu>
}

const Footer = ({
  menuList = [],
  ...props
}: FooterProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="footer_container">
      <div className="menu_wrap">
        {map(menuList, ({id, path, icon, active, unread, unreadStyle}) => (
          <div key={`menu-${id}`} className={classnames(active ? ['menu', 'active'] : 'menu')}>
            <div className="icon_wrap">
              <Icon
                id={icon}
                width={26}
                height={26}
                viewBox="0 0 26 26"
                color="#393939"
                fill={active ? '#393939' : undefined}
              />
              {unread > 0 && (
                <div className={classnames(unreadStyle === 'number' ? 'unread' : 'unread_point')}>
                  <span>{unread}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer
