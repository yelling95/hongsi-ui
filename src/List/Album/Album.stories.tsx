import React from 'react'
import type {StoryObj, Meta} from '@storybook/react'
import Album from './Album'
import AlbumItem from './AlbumItem'

const meta: Meta<typeof Album> = {
  title: 'List/Album',
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes: {},
  component: Album,
}

export default meta
type Story = StoryObj<typeof Album>

const RenderList = (args: any) => {
  return (
    <Album {...args}>
      <AlbumItem album="최근 항목" photoCnt={34} />
      <AlbumItem album="최근 항목" photoCnt={34} />
      <AlbumItem album="최근 항목" photoCnt={34} />
      <AlbumItem album="최근 항목" photoCnt={34} />
      <AlbumItem album="최근 항목" photoCnt={34} />
      <AlbumItem album="최근 항목" photoCnt={34} />
    </Album>
  )
}

export const Default: Story = {
  render: (args) => RenderList(args),
  args: {},
}
