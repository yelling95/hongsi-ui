import type {Meta, StoryObj} from '@storybook/react'

import Sheet from './Sheet'

const meta = {
  title: 'Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Sheet>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    message: `텍스트는<br />최대 두 줄까지 적어주세요`,
  },
}

export const Linked: Story = {
  args: {
    message: `텍스트는<br />최대 두 줄까지 적어주세요`,
    url: '/home',
  },
}

export const SingleLine: Story = {
  args: {
    message: `텍스트가 한 줄일 경우 입니다.`,
  },
}

export const SingleLineLinked: Story = {
  args: {
    message: `텍스트가 한 줄일 경우 입니다.`,
    url: '/home',
  },
}
