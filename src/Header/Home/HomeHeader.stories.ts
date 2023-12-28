import type {Meta, StoryObj} from '@storybook/react'

import HomeHeader from './HomeHeader'

const meta = {
  title: 'Header/HomeHeader',
  component: HomeHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HomeHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
