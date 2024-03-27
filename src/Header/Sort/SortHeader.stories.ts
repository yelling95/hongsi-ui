import type {StoryObj, Meta} from '@storybook/react'

import SortHeader from './SortHeader'

const meta: Meta<typeof SortHeader> = {
  title: 'Header/SortHeader',
  component: SortHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof SortHeader>

export const Default: Story = {
  args: {},
}
