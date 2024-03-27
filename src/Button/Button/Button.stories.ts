import type {Meta, StoryObj} from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Button/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
}

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
