import type {Meta, StoryObj} from '@storybook/react'

import HomeHeader from './HomeHeader'

const meta: Meta<typeof HomeHeader> = {
  title: 'Header/HomeHeader',
  component: HomeHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
