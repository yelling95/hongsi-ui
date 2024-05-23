import React from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Basic from './Basic'
import BasicItem from './BasicItem'

const meta: Meta<typeof Basic> = {
  title: 'List/Basic',
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes: {},
  component: Basic,
}

export default meta
type Story = StoryObj<typeof Basic>

const RenderList = (args: any) => {
  return (
    <Basic {...args}>
      <BasicItem {...args} />
    </Basic>
  )
}

export const Default: Story = {
  render: (args) => RenderList(args),
  args: {
    size: 'lg',
  },
}

export const Medium: Story = {
  render: (args) => RenderList(args),
  args: {
    size: 'md',
  },
}
