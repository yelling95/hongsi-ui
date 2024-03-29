import type {Meta, StoryObj} from '@storybook/react'

import Tag from './Tag'

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
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
