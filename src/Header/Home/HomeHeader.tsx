import React, {CSSProperties} from 'react'
import classnames from 'classnames'
import './HomeHeader.scss'

import LogoImage from '../../assets/images/logo.svg'
import {IconButton} from '../../Button/'

interface HomeHeaderProps {
  homeUrl: string
  editUrl: string
  searchUrl: string
}

const HomeHeader = ({
  homeUrl = '/',
  editUrl = '/edit',
  searchUrl = '/search',
  ...props
}: HomeHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => {
  const goHome = () => {
    window.location.href = homeUrl
  }

  const goSearch = () => {
    window.location.href = searchUrl
  }

  const goEdit = () => {
    window.location.href = editUrl
  }

  return (
    <div className="header_container">
      <div className="logo_wrap">
        <img src={LogoImage} alt="홍시" onClick={goHome} />
      </div>
      <div className="buttons_wrap">
        <IconButton type="EditWrite" size="sm" color="#393939" onClick={goEdit} />
        <IconButton type="Search" size="sm" color="#393939" onClick={goSearch} />
      </div>
    </div>
  )
}

export default HomeHeader
