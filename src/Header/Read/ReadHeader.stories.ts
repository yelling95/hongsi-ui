import type {StoryObj, Meta} from '@storybook/react'

import ReadHeader from './ReadHeader'

const meta = {
  title: 'Header/ReadHeader',
  component: ReadHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ReadHeader>

export default meta
type Story = StoryObj<typeof ReadHeader>

export const Default: Story = {
  args: {},
}
