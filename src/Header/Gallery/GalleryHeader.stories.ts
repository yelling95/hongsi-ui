import type {StoryObj, Meta} from '@storybook/react'
import {range} from 'lodash-es'

import GalleryHeader from './GalleryHeader'

const meta: Meta<typeof GalleryHeader> = {
  title: 'Header/GalleryHeader',
  component: GalleryHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof GalleryHeader>

export const Default: Story = {
  args: {},
}
