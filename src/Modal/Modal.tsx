import React, {CSSProperties, ReactElement} from 'react'
import classname from 'classnames'
import {map} from 'lodash-es'
import {Button} from '../Button'

import './Modal.scss'

interface ModalButton {
  type?: 'primary' | 'secondary' | 'line'
  label?: string
  click: () => void
}

type ModalProps = {
  isShow?: boolean
  isShowDimm?: boolean
  buttonList?: Array<ModalButton>
  children?: ReactElement
  style?: CSSProperties
  close?: () => void
}

export default function Modal({
  isShow = false,
  isShowDimm = false,
  buttonList = [
    {
      type: 'primary',
      label: '확인',
      click: () => {
        close()
      },
    },
  ],
  children,
  style,
  close = () => {},
}: ModalProps) {
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

  const renderButtonWrap = () => {
    return (
      <div className={classname('buttons_wrap')}>
        {map(buttonList, (button, buttonIdx) => (
          <Button key={`modal-button-${buttonIdx}`} type={button.type} onClick={button.click}>
            {button.label}
          </Button>
        ))}
      </div>
    )
  }

  return (
    <div className={classname('modal_container', isShow && 'open')} style={csStyle}>
      <div className="modal_contents">{children}</div>
      {renderButtonWrap()}
    </div>
  )
}
