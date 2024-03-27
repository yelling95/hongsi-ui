import type {Meta, StoryObj} from '@storybook/react'

import IconButton from './IconButton'

const meta: Meta<typeof IconButton> = {
  title: 'Button/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}
