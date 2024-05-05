import React, {CSSProperties, ReactElement, useMemo} from 'react'
import classNames from 'classnames'
import {map} from 'lodash-es'

import './Dropdown.scss'

interface Option {
  id: string
  label: string
  click: () => void
}

type DropdownProps = {
  id?: string
  isShow?: boolean
  isShowDimm?: boolean
  selected?: string
  options?: Array<Option>
  style?: CSSProperties
  close?: () => void
}

export default function Dropdown({
  id,
  isShow = false,
  isShowDimm = false,
  selected = '01',
  options = [],
  style,
  close = () => {},
}: DropdownProps) {
  const csStyle: CSSProperties = style || {}

  React.useEffect(() => {
    if (isShowDimm) {
      const dimmId = id ? `modalDimm-${id}` : 'modalDimm'
      const dimmElement = document.getElementById(dimmId)
      const layer = dimmElement?.dataset.layer || -1

      if (isShow) {
        if (!dimmElement) {
          const dimm = document.createElement('div')
          dimm.id = dimmId
          dimm.classList.add('dimm')
          dimm.style.backgroundColor = 'var(--dimm-layer)'
          dimm.style.cursor = 'pointer'
          dimm.dataset.layer = '0'

          const wrap = document.getElementById('modalStoryWrap')

          if (wrap) {
            wrap.append(dimm)
            wrap.style.overflow = 'hidden'
          } else {
            document.body.append(dimm)
            document.body.style.overflow = 'hidden'
          }

          dimm.addEventListener('click', close)
        } else {
          dimmElement.dataset.layer = String(+layer + 1)
          dimmElement.style.display = 'block'
          document.body.style.overflow = 'hidden'
        }
      } else {
        if (dimmElement) {
          if (+layer < 1) {
            dimmElement.style.display = 'none'
            document.body.style.overflow = 'auto'
            dimmElement.dataset.layer = '-1'
          } else {
            dimmElement.dataset.layer = String(+layer - 1)
          }
        }
      }
    }
  }, [isShow])

  const height = useMemo(() => {
    const padding = 23
    const optHeight = 45
    if (!options) return '50%'
    return padding + optHeight * options.length + padding
  }, [options])

  return (
    <div
      className={classNames('dropdown_container', 'slider', isShow && 'open')}
      style={{...csStyle, height}}>
      <div className="scroll_wrap">
        <div className="option_wrap">
          {map(options, (opt, optIdx) => (
            <div
              key={`dropdown-option-${optIdx}`}
              className={classNames(opt.id === selected && 'selected')}
              onClick={opt.click}>
              {opt.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
