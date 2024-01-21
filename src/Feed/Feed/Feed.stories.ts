import type {Meta, StoryObj} from '@storybook/react'

import Feed from './Feed'

const meta = {
  title: 'Feed/Feed',
  component: Feed,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Feed>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Pictures: Story = {
  args: {
    imgList: [
      {
        url: 'https://cdn.eroun.net/news/photo/201904/5248_19828_3216.jpg',
        desc: '사진 1',
      },
      {
        url: 'https://cdn.eroun.net/news/photo/201904/5248_19828_3216.jpg',
        desc: '사진 2',
      },
      {
        url: 'https://cdn.eroun.net/news/photo/201904/5248_19828_3216.jpg',
        desc: '사진 3',
      },
      {
        url: 'https://cdn.eroun.net/news/photo/201904/5248_19828_3216.jpg',
        desc: '사진 4',
      },
      {
        url: 'https://cdn.eroun.net/news/photo/201904/5248_19828_3216.jpg',
        desc: '사진 5',
      },
      {
        url: 'https://cdn.eroun.net/news/photo/201904/5248_19828_3216.jpg',
        desc: '사진 6',
      },
      {
        url: 'https://cdn.eroun.net/news/photo/201904/5248_19828_3216.jpg',
        desc: '사진 7',
      },
      {
        url: 'https://cdn.eroun.net/news/photo/201904/5248_19828_3216.jpg',
        desc: '사진 8',
      },
      {
        url: 'https://cdn.eroun.net/news/photo/201904/5248_19828_3216.jpg',
        desc: '사진 9',
      },
      {
        url: 'https://cdn.eroun.net/news/photo/201904/5248_19828_3216.jpg',
        desc: '사진 10',
      },
    ],
  },
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
