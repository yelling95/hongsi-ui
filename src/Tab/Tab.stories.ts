import type { Meta, StoryObj } from '@storybook/react'
import { range } from 'lodash-es'

import Tab from './Tab'

const meta = {
	title: 'Tab',
	component: Tab,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Tab>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		data: range(1, 6, 1).map(t => ({
			id: t < 10 ? '0' + t : t,
			label: 'Tab ' + t
		}))
	},
}
