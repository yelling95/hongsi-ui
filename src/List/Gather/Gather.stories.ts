import type { Meta, StoryObj } from '@storybook/react'

import Gather from './Gather'

const meta = {
	title: 'List/Gather',
	component: Gather,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Gather>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		size: 'lg'
	},
}

export const Medium: Story = {
	args: {
		size: 'md'
	},
}

export const Disabled: Story = {
	args: {
		disabled: true
	},
}

