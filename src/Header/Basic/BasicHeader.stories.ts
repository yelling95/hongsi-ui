import type {StoryObj, Meta} from '@storybook/react'

import BasicHeader from './BasicHeader'

const meta: Meta<typeof BasicHeader> = {
  title: 'Header/BasicHeader',
  component: BasicHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof BasicHeader>

export const Default: Story = {
  args: {
    title: '로그인',
  },
}
