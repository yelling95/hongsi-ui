import type {StoryObj, Meta} from '@storybook/react'

import ReadHeader from './ReadHeader'

const meta: Meta<typeof ReadHeader> = {
  title: 'Header/ReadHeader',
  component: ReadHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ReadHeader>

export const Default: Story = {
  args: {},
}
