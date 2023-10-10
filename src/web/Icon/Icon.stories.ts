import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'

const meta = {
	title: 'Web/Icon',
	component: Icon,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		id: 'AccountFull'
	},
}
