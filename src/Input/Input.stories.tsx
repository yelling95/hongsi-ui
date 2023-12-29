import React from 'react'
import type {StoryObj} from '@storybook/react'
import Input from './Input'

const meta = {
  title: 'component/Input',
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

const InputWithHooks = (args: any) => {
  const [value, setValue] = React.useState(args.value || '')

  return (
    <Input
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

export const Search: Story = {
  render: (args) => InputWithHooks(args),
  args: {
    type: 'search',
  },
}

export const NumberWithComma: Story = {
  render: (args) => InputWithHooks(args),
  args: {
    type: 'number',
  },
}

export const OnlyNumber: Story = {
  render: (args) => InputWithHooks(args),
  args: {
    type: 'numberOnly',
  },
}

export const Decimal: Story = {
  render: (args) => InputWithHooks(args),
  args: {
    type: 'decimal',
  },
}

export const Phone: Story = {
  render: (args) => InputWithHooks(args),
  args: {
    type: 'phone',
    placeholder: '휴대폰번호를 입력해주세요.',
  },
}

export const Disabled: Story = {
  render: (args) => InputWithHooks(args),
  args: {
    disabled: true,
    value: 'hello',
  },
}

export const Error: Story = {
  render: (args) => InputWithHooks(args),
  args: {
    label: '라벨',
    isState: 'error',
    errorMessage: '에러메세지',
  },
}

export const ValueIsRequired: Story = {
  render: (args) => InputWithHooks(args),
  args: {
    label: '라벨',
    isRequired: true,
  },
}

export const RegExp: Story = {
  render: (args) => InputWithHooks(args),
  args: {
    label: '영어, 숫자만 입력',
    regExp: /^[a-zA-Z0-9]*$/,
  },
}
