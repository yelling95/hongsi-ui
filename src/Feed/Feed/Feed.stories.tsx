import React from 'react'
import type {StoryObj} from '@storybook/react'
import {map, range} from 'lodash-es'
import Slider from 'react-slick'

import Feed from './Feed'
import './Slick.scss'

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

  const SliderOpt = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <Feed>
      <div className="slider_wrap" style={{height: 540}}>
        <Slider {...SliderOpt}>
          {map(sampleImageList, (img, index) => (
            <div key={`slider-img-${index}`} className="img_wrap">
              <div style={{height: 540, backgroundImage: `url('${img.url}')`}}></div>
            </div>
          ))}
        </Slider>
      </div>
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
