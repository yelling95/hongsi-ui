import type {Meta, StoryObj} from '@storybook/react'

import Footer from './Footer'

const meta = {
  title: 'Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    menuList: [
      {
        id: 'home',
        path: '/home',
        icon: 'Home',
        active: true,
        onClick: () => {
          alert('home')
        },
      },
      {
        id: 'group',
        path: '/group',
        icon: 'Group',
        active: false,
        onClick: () => {
          alert('group')
        },
      },
      {
        id: 'chat',
        path: '/chat',
        icon: 'Chat',
        active: false,
        unread: 4,
        onClick: () => {
          alert('chat')
        },
      },
      {
        id: 'mypage',
        path: '/mypage',
        icon: 'Account',
        active: false,
        onClick: () => {
          alert('mypage')
        },
      },
    ],
  },
}
