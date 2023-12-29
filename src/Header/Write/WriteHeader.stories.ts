import type {StoryObj, Meta} from '@storybook/react'
import {range} from 'lodash-es'

import WriteHeader from './WriteHeader'

const meta = {
  title: 'Header/WriteHeader',
  component: WriteHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof WriteHeader>

export default meta
type Story = StoryObj<typeof WriteHeader>

export const Default: Story = {
  args: {
    title: '댓글',
  },
}

export const Save: Story = {
  args: {
    title: '글 작성',
    writeUrl: '/write',
  },
}
