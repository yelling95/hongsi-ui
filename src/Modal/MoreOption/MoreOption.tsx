import React, {CSSProperties, ReactElement} from 'react'
import classNames from 'classnames'
import {map} from 'lodash-es'

import './MoreOption.scss'

interface Option {
  id: string
  label: string
  click: () => void
}

type MoreOptionProps = {
  isShow?: boolean
  isShowDimm?: boolean
  selected?: string
  options?: Array<Option>
  style?: CSSProperties
  close?: () => void
}

export default function MoreOption({
  isShow = true,
  isShowDimm = false,
  selected = '01',
  options = [],
  style,
  close = () => {},
}: MoreOptionProps) {
  const csStyle: CSSProperties = style || {}

  React.useEffect(() => {
    if (isShowDimm) {
      const dimmElement = document.getElementById('modalDimm')
      const layer = dimmElement?.dataset.layer || -1

      if (isShow) {
        if (!dimmElement) {
          const dimm = document.createElement('div')
          dimm.id = 'modalDimm'
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

  return (
    <div className={classNames('moreopt_container', 'slider', isShow && 'open')} style={csStyle}>
      <div className="option_wrap">
        {map(options, (opt, optIdx) => (
          <div
            key={`moreopt-option-${optIdx}`}
            className={classNames(opt.id === selected && 'selected')}
            onClick={opt.click}>
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  )
}
