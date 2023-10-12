import type { Meta, StoryObj } from '@storybook/react'

import CrewItem from './CrewItem'

const meta = {
	title: 'Web/CrewItem',
	component: CrewItem,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof CrewItem>

export default meta

type Story = StoryObj<typeof meta>

export const Large: Story = {
	args: {
		size: 'lg'
	},
}
