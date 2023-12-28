import type {Meta, StoryObj} from '@storybook/react'

import PostHeader from './PostHeader'

const meta = {
  title: 'Header/PostHeader',
  component: PostHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PostHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
