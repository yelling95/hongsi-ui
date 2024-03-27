import type {Meta, StoryObj} from '@storybook/react'

import Snackbar from './Snackbar'

const meta: Meta<typeof Snackbar> = {
  title: 'Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Toast: Story = {
  args: {},
}

export const Action: Story = {
  args: {
    message: '텍스트',
    action: '버튼',
    onAction: () => {
      alert('실행!')
    },
  },
}

export const ActionCheck: Story = {
  args: {
    message: '텍스트',
    action: '버튼',
    icon: 'Check',
    onAction: () => {
      alert('실행!')
    },
  },
}
