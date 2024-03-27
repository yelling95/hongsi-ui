import type {Meta, StoryObj} from '@storybook/react'

import Chatting from './Chatting'

const meta: Meta<typeof Chatting> = {
  title: 'List/Chatting',
  component: Chatting,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    id: '',
  },
}
