import type {StoryObj, Meta} from '@storybook/react'

import SearchHeader from './SearchHeader'

const meta = {
  title: 'Header/SearchHeader',
  component: SearchHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SearchHeader>

export default meta
type Story = StoryObj<typeof SearchHeader>

export const Default: Story = {
  args: {},
}

export const Disable: Story = {
  args: {
    disabled: true,
  },
}
