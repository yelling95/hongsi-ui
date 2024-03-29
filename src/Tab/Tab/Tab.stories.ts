import type {Meta, StoryObj} from '@storybook/react'
import {range} from 'lodash-es'

import Tab, {TabItem} from './Tab'

const meta: Meta<typeof Tab> = {
  title: 'Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

const sampleData: Array<TabItem> = range(1, 6, 1).map((t) => ({
  id: t < 10 ? '0' + t : '' + t,
  label: 'Tab ' + t,
}))

export const Default: Story = {
  args: {
    data: sampleData,
  },
}
