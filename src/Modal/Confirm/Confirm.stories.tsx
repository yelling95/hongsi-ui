import React from 'react'
import type {StoryObj} from '@storybook/react'
import Confirm from './Confirm'

import {Button} from '../../Button'

const meta = {
  title: 'Modal/Confirm',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  component: Confirm,
}

export default meta
type Story = StoryObj<typeof Confirm>

const ModalWithHooks = (args: any) => {
  const [isOpen, setIsOpen] = React.useState(false)

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
      <Confirm isShow={isOpen} isShowDimm={true} close={() => setIsOpen(false)} {...args}>
        <div>작성 중인 글이 있어요</div>
        <div>이어서 작성 하실건가요?</div>
      </Confirm>
    </div>
  )
}

export const Default: Story = {
  render: (args) => ModalWithHooks(args),
  args: {},
}

export const ButtonCustom: Story = {
  render: (args) => ModalWithHooks(args),
  args: {
    buttonList: [
      {
        type: 'primary',
        label: '확인',
        click: () => {
          alert('확인')
        },
      },
      {
        type: 'secondary',
        label: '취소',
        click: () => {
          alert('취소')
        },
      },
    ],
  },
}
