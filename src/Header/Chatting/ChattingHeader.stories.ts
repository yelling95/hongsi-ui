import type {StoryObj, Meta} from '@storybook/react'

import ChattingHeader from './ChattingHeader'

const meta = {
  title: 'Header/ChattingHeader',
  component: ChattingHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ChattingHeader>

export default meta
type Story = StoryObj<typeof ChattingHeader>

export const AlarmOn: Story = {
  args: {
    alarmFg: true,
  },
}

export const AlarmOff: Story = {
  args: {
    alarmFg: false,
  },
}
