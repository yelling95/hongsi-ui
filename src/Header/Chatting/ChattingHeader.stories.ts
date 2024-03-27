import type {StoryObj, Meta} from '@storybook/react'

import ChattingHeader from './ChattingHeader'

const meta: Meta<typeof ChattingHeader> = {
  title: 'Header/ChattingHeader',
  component: ChattingHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

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
