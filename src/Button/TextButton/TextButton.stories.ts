import type {Meta, StoryObj} from '@storybook/react'

import TextButton from './TextButton'

const meta = {
  title: 'Button/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
