import type {StoryObj, Meta} from '@storybook/react'

import SearchHeader from './SearchHeader'

const meta: Meta<typeof SearchHeader> = {
  title: 'Header/SearchHeader',
  component: SearchHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

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
