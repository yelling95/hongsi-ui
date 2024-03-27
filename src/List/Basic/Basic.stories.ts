import type {Meta, StoryObj} from '@storybook/react'

import Basic from './Basic'

const meta: Meta<typeof Basic> = {
  title: 'List/Basic',
  component: Basic,
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
