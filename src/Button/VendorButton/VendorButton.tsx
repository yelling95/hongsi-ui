import React, {CSSProperties} from 'react'
import classnames from 'classnames'
import KaKaoLogo from '../../assets/images/kakao.png'
import NaverLogo from '../../assets/images/naver.png'
import AppleLogo from '../../assets/images/apple.png'

import './VendorButton.scss'

interface VendorButtonProps {
  id?: string
  type?: 'kakao' | 'naver' | 'apple'
  size?: 'sm' | 'lg'
  disabled?: boolean
  style?: CSSProperties
  onClick?: () => void
}

const VendorButton = ({
  id,
  type = 'kakao',
  size = 'lg',
  disabled = false,
  style = {},
  onClick = () => {},
  ...props
}: VendorButtonProps & React.HTMLAttributes<HTMLButtonElement>) => {
  const VendorMap = {
    kakao: {
      label: '카카오로 시작하기',
      desc: '카카오',
      logo: KaKaoLogo,
    },
    naver: {
      label: '네이버로 시작하기',
      desc: '네이버',
      logo: NaverLogo,
    },
    apple: {
      label: 'Apple로 시작하기',
      desc: 'Apple',
      logo: AppleLogo,
    },
  }
  return (
    <button
      id={id}
      className={classnames('vendor_button_container', type || 'kakao', size || 'lg')}
      onClick={onClick}
      style={style}
      disabled={disabled}
      type="button"
      {...props}>
      <img src={VendorMap[type].logo} alt={VendorMap[type].desc} />
      {size === 'lg' && <label>{VendorMap[type].label}</label>}
    </button>
  )
}

export default VendorButton
