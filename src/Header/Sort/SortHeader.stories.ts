import type {StoryObj, Meta} from '@storybook/react'

import SortHeader from './SortHeader'

const meta = {
  title: 'Header/SortHeader',
  component: SortHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SortHeader>

export default meta
type Story = StoryObj<typeof SortHeader>

export const Default: Story = {
  args: {},
}
