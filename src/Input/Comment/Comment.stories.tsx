import React from 'react'
import type {StoryObj} from '@storybook/react'
import Comment from './Comment'

const meta = {
  title: 'component/Comment',
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  component: Comment,
}

export default meta
type Story = StoryObj<typeof Comment>

const InputWithHooks = (args: any) => {
  const [value, setValue] = React.useState(args.value || '')

  return (
    <Comment
      {...args}
      value={value}
      onChange={({value}) => {
        setValue(value || '')
      }}
    />
  )
}

export const Default: Story = {
  render: (args) => InputWithHooks(args),
  args: {},
}
