import type { Meta, StoryObj } from '@storybook/react'

import Chatting from './Chatting'

const meta = {
	title: 'Web/List/Chatting',
	component: Chatting,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Chatting>

export default meta

type Story = StoryObj<typeof meta>

export const Large: Story = {
	args: {
		size: 'lg'
	},
}
