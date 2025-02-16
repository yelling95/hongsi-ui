import React from 'react'
import type {StoryObj} from '@storybook/react'
import MoreOption from './MoreOption'

import {Button} from '../../Button'
import {range} from 'lodash-es'

const meta = {
  title: 'Modal/MoreOption',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  component: MoreOption,
}

export default meta
type Story = StoryObj<typeof MoreOption>

const ModalWithHooks = (args: any) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selected, setSelected] = React.useState('01')

  return (
    <div
      id="modalStoryWrap"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        width: 375,
        height: 800,
        padding: 20,
        background: '#EFEFEF',
      }}>
      <Button onClick={() => setIsOpen(true)}>Open!</Button>
      <MoreOption
        isShow={isOpen}
        isShowDimm={true}
        selected={selected}
        close={() => setIsOpen(false)}
        {...args}
      />
    </div>
  )
}

export const Default: Story = {
  render: (args) => ModalWithHooks(args),
  args: {
    options: range(1, 21, 1).map((opt) => ({
      id: opt < 10 ? '0' + opt : '' + opt,
      label: '아이템 ' + opt,
      click: () => {
        alert('아이템 ' + opt)
      },
    })),
  },
}
