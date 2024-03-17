import type {Meta, StoryObj} from '@storybook/react'
import Skeleton from './Skeleton'

const meta = {
  title: 'Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    width: 375,
    height: 579,
    viewBox: '0 0 375 579',
  },
}
