import React from 'react'
import type {StoryObj} from '@storybook/react'
import Dropdown from './Dropdown'

import {Button} from '../../Button'
import {range} from 'lodash-es'

const meta = {
  title: 'Modal/Dropdown',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  component: Dropdown,
}

export default meta
type Story = StoryObj<typeof Dropdown>

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
      <Dropdown
        isShow={isOpen}
        isShowDimm={true}
        selected={selected}
        close={() => setIsOpen(false)}
        {...args}
      />
    </div>
  )
}

const DoubleModalWithHooks = (args: any) => {
  const [isOpenOne, setIsOpenOne] = React.useState(false)
  const [isOpenTwo, setIsOpenTwo] = React.useState(false)
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
      <Button onClick={() => setIsOpenOne(true)}>One!</Button>
      <Button onClick={() => setIsOpenTwo(true)}>Two!</Button>
      <Dropdown
        id="one"
        isShow={isOpenOne}
        isShowDimm={true}
        selected={selected}
        close={() => setIsOpenOne(false)}
        {...args}
      />
      <Dropdown
        id="two"
        isShow={isOpenTwo}
        isShowDimm={true}
        selected={selected}
        close={() => setIsOpenTwo(false)}
        {...args}
      />
    </div>
  )
}

export const Default: Story = {
  render: (args) => ModalWithHooks(args),
  args: {
    options: range(1, 11, 1).map((opt) => ({
      id: opt < 10 ? '0' + opt : '' + opt,
      label: '아이템 ' + opt,
      click: () => {
        alert('아이템 ' + opt)
      },
    })),
  },
}

export const Double: Story = {
  render: (args) => DoubleModalWithHooks(args),
  args: {
    options: range(1, 11, 1).map((opt) => ({
      id: opt < 10 ? '0' + opt : '' + opt,
      label: '아이템 ' + opt,
      click: () => {
        alert('아이템 ' + opt)
      },
    })),
  },
}
