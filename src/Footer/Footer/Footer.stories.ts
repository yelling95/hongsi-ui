import type {Meta, StoryObj} from '@storybook/react'

import Footer from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

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
        unread: 0,
        onClick: () => {
          alert('home')
        },
      },
      {
        id: 'group',
        path: '/group',
        icon: 'Group',
        active: false,
        unread: 2,
        onClick: () => {
          alert('group')
        },
      },
      {
        id: 'chat',
        path: '/chat',
        icon: 'Chat',
        active: false,
        unreadStyle: 'number',
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
        unread: 4,
        onClick: () => {
          alert('mypage')
        },
      },
    ],
  },
}
