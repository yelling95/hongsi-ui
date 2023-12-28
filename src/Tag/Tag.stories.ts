import type { Meta, StoryObj } from '@storybook/react'

import Tag from './Tag'

const meta = {
	title: 'Tag',
	component: Tag,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof meta>

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
