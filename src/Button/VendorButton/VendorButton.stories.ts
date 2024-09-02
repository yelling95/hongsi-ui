import type {Meta, StoryObj} from '@storybook/react'

import VendorButton from './VendorButton'

const meta: Meta<typeof VendorButton> = {
  title: 'Button/VendorButton',
  component: VendorButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Kakao: Story = {
  args: {
    type: 'kakao',
  },
}

export const Naver: Story = {
  args: {
    type: 'naver',
  },
}

export const Apple: Story = {
  args: {
    type: 'apple',
  },
}
