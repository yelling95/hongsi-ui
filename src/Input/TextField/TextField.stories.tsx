import React from 'react'
import type {StoryObj} from '@storybook/react'
import TextField from './TextField'

const meta = {
  title: 'component/TextField',
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  component: TextField,
}

export default meta
type Story = StoryObj<typeof TextField>

const InputWithHooks = (args: any) => {
  const [value, setValue] = React.useState(args.value || '')

  return (
    <TextField
      {...args}
      value={value}
      onChange={({value}) => {
        setValue(value || '')
      }}
      style={{width: '300px'}}
    />
  )
}

const OptionWithHooks = (args: any) => {
  const [value, setValue] = React.useState(args.value || '')
  const [options, setOptions] = React.useState(args.options || [])

  return (
    <div>
      <TextField
        {...args}
        value={value}
        options={options}
        onChange={({value}) => {
          setValue(value || '')
        }}
        onSelectOption={(opt) => {
          setValue(opt.label)
        }}
        style={{width: '300px'}}
      />
      <div style={{width: 300, height: 50, background: 'red'}}>Test Area</div>
    </div>
  )
}

export const Default: Story = {
  render: (args) => InputWithHooks(args),
  args: {
    type: 'default',
  },
}

export const Large: Story = {
  render: (args) => InputWithHooks(args),
  args: {
    type: 'default',
    size: 'lg',
  },
}

export const Medium: Story = {
  render: (args) => InputWithHooks(args),
  args: {
    type: 'default',
    size: 'md',
  },
}

export const Small: Story = {
  render: (args) => InputWithHooks(args),
  args: {
    type: 'default',
    size: 'sm',
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

export const Option: Story = {
  render: (args) => OptionWithHooks(args),
  args: {
    type: 'default',
    options: [
      {
        id: '1',
        label: '1@naver.com',
      },
      {
        id: '2',
        label: '2@naver.com',
      },
      {
        id: '3',
        label: '3@naver.com',
      },
    ],
  },
}
