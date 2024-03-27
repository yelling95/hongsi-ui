import type {Meta, StoryObj} from '@storybook/react'

import TextButton from './TextButton'

const meta: Meta<typeof TextButton> = {
  title: 'Button/TextButton',
  component: TextButton,
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
