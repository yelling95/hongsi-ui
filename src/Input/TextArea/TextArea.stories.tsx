import React from 'react'
import type {StoryObj} from '@storybook/react'
import TextArea from './TextArea'

const meta = {
  title: 'component/TextArea',
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  component: TextArea,
}

export default meta
type Story = StoryObj<typeof TextArea>

const InputWithHooks = (args: any) => {
  const [value, setValue] = React.useState(args.value || '')

  return (
    <TextArea
      {...args}
      value={value}
      onChange={({value}) => {
        setValue(value || '')
      }}
      style={{width: '300px'}}
    />
  )
}

export const Default: Story = {
  render: (args) => InputWithHooks(args),
  args: {
    type: 'default',
  },
}
