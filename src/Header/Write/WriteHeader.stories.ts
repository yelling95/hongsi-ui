import type {StoryObj, Meta} from '@storybook/react'
import {range} from 'lodash-es'

import WriteHeader from './WriteHeader'

const meta: Meta<typeof WriteHeader> = {
  title: 'Header/WriteHeader',
  component: WriteHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

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
    mode: 'write',
    onSave: () => {
      alert('글저장!')
    },
  },
}
