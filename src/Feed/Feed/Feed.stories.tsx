import React from 'react'
import type {StoryObj} from '@storybook/react'
import {map, range} from 'lodash-es'
import Feed from './Feed'

const meta = {
  title: 'Feed/Feed',
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes: {},
  component: Feed,
}

export default meta
type Story = StoryObj<typeof Feed>

const ImageRender = (args: any) => {
  const sampleImageList = range(1, 11, 1).map((n) => ({
    url: 'https://cdn.eroun.net/news/photo/201904/5248_19828_3216.jpg',
    desc: '사진 ' + n,
  }))

  return (
    <Feed>
      {map(sampleImageList, (img, index) => (
        <div key={`slider-img-${index}`} className="img_wrap">
          <div style={{height: 540, backgroundImage: `url('${img.url}')`}}></div>
        </div>
      ))}
    </Feed>
  )
}

export const Default: Story = {
  args: {},
}

export const Pictures: Story = {
  render: (args) => ImageRender(args),
  args: {},
}

export const Gather: Story = {
  args: {
    gather: true,
  },
}

export const Declaration: Story = {
  args: {
    declare: true,
  },
}
