import type {Meta, StoryObj} from '@storybook/react'

import Gather from './Gather'

const meta: Meta<typeof Gather> = {
  title: 'List/Gather',
  component: Gather,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'lg',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
