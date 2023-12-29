import type {StoryObj, Meta} from '@storybook/react'
import {range} from 'lodash-es'

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
type Story = StoryObj<typeof PostHeader>

export const Default: Story = {
  args: {},
}
