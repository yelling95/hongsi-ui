import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta = {
	title: 'Button/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		type: 'primary'
	},
}

export const Secondary: Story = {
	args: {
		type: 'secondary'
	},
}

export const Large: Story = {
	args: {
		size: 'lg'
	},
}

export const Medium: Story = {
	args: {
		size: 'md'
	},
}

export const Small: Story = {
	args: {
		size: 'sm'
	},
}
