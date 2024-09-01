import classnames from 'classnames'
import React, {CSSProperties} from 'react'
import {last, map, filter} from 'lodash-es'
import {Icon} from '../../Icon'
import {convertThousandSeparator, makePhoneNumber} from '../const'
import './TextField.scss'

interface Option {
  id: string
  label: string
}

type TextFieldProps = {
  id?: string
  size?: 'lg' | 'md' | 'sm'
  style?: CSSProperties
  type?: 'default' | 'search' | 'number' | 'numberOnly' | 'decimal' | 'phone' | 'post' | 'password'
  className?: string
  disabled?: boolean | undefined
  placeholder?: string | undefined
  value?: string | undefined
  label?: string | undefined
  isState?: 'default' | 'error'
  errorMessage?: string | undefined
  isRequired?: boolean | undefined
  hasStartAdornment?: boolean
  startAdornmentEl?: any
  hasEndAdornment?: boolean
  endAdornmentEl?: any
  handleFocus?: boolean
  isShowClear?: boolean
  regExp?: RegExp
  options?: Array<Option>
  onChange: (e: {id: string | null; value: string | undefined}) => void
  onSelectOption?: (option: Option) => void
}

export default function TextField({
  id,
  size,
  style,
  type,
  className,
  disabled,
  placeholder,
  value,
  label,
  isState,
  errorMessage,
  isRequired,
  hasStartAdornment,
  startAdornmentEl,
  hasEndAdornment,
  endAdornmentEl,
  handleFocus,
  isShowClear,
  regExp,
  options,
  onChange,
  onSelectOption = (opt) => {},
  ...props
}: TextFieldProps) {
  const inputFocus = React.useRef<HTMLInputElement>(null)
  const csStyle: CSSProperties = style || {}

  const [isFocus, setIsFocus] = React.useState<boolean>(false)
  const [inputType, setInputType] = React.useState<string>('text')

  const convertValue = (_value: any) => {
    switch (type) {
      case 'number':
        return convertThousandSeparator(_value ? String(_value).replace(/[^\d]/g, '') : _value)
      case 'numberOnly':
        return _value ? String(_value).replace(/[^\d]/g, '') : _value
      case 'decimal':
        if (_value) {
          const roundPositionRegExp = /^([0-9]+|0{1})(\.{1}\d{0,2})?$/g
          const removeComma = String(_value).replace(/,/g, '')
          if (roundPositionRegExp.test(removeComma)) {
            const convertNumber =
              last(removeComma) === '.' || last(removeComma) === '0' ? removeComma : +removeComma
            return convertNumber === '' ? null : convertNumber //convertThousandSeparator(convertNumber) -> , 찍어주려면 이걸로 리턴
          } else {
            // 정규식에 적합하지 않은 값은 현재값을 되돌려 준다
            return value
          }
        } else {
          return _value
        }

      case 'phone':
        return makePhoneNumber(_value)
      default:
        if (regExp) {
          if (_value) {
            if (regExp.test(_value)) {
              return _value
            } else {
              // 정규식에 적합하지 않은 값은 현재값을 되돌려 준다
              return value
            }
          } else {
            return _value
          }
        } else {
          return _value
        }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({id: e.target.id || null, value: convertValue(e.target.value)})
  }

  React.useEffect(() => {
    if (inputFocus && handleFocus) {
      inputFocus.current?.focus()
    }
  }, [handleFocus, inputFocus])

  React.useEffect(() => {
    if (type === 'password') {
      setInputType('password')
    }
  }, [type])

  const OptionContents = React.useMemo(() => {
    if (isFocus && value && value.length > 0 && options && options.length > 0) {
      let resultOptions = options
      const searchOptions = filter(options, (opt) => opt.label.includes(value.trim()))
      if (searchOptions && searchOptions.length > 0) {
        resultOptions = searchOptions
      }
      return (
        <div className="option_wrap" style={{top: label ? 58 : 34}}>
          {map(resultOptions, (opt, optIdx) => (
            <div key={`textfied-option-${optIdx}`} onClick={() => onSelectOption(opt)}>
              {opt.label}
            </div>
          ))}
        </div>
      )
    }
    return ''
  }, [options, value, isFocus])

  return (
    <div className={classnames('input_container', className, size)} style={csStyle}>
      {label && (
        <span className="input_label">
          {label}&nbsp;
          {isRequired && <span className="required">*</span>}
        </span>
      )}
      <div
        className={classnames(
          'input_wrap',
          type,
          isState,
          isFocus && 'is_focus',
          disabled && 'disabled',
        )}>
        <div className="adornment_wrap start">{hasStartAdornment && startAdornmentEl}</div>

        <input
          id={id}
          ref={inputFocus}
          onChange={(e) => handleChange(e)}
          disabled={disabled}
          placeholder={placeholder}
          value={convertValue(value) || ''}
          onFocus={() => setIsFocus(true)}
          onBlur={() => {
            if (options && options.length > 0) {
              setTimeout(() => {
                setIsFocus(false)
              }, 200)
            } else {
              setIsFocus(false)
            }
          }}
          type={inputType || 'text'}
          {...props}
        />

        <div className="adornment_wrap end">
          {isShowClear && (
            <Icon
              id="Clear"
              color="#ABABAB"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              style={{cursor: 'pointer'}}
              onClick={(e) => {
                if (inputFocus.current) {
                  const target = inputFocus.current
                  target.value = ''
                  onChange({id: target.id || null, value: ''})
                }
              }}
              onMouseDown={(e) => {
                e.preventDefault()
              }}
            />
          )}
          {hasEndAdornment && endAdornmentEl}
        </div>
      </div>
      {isState === 'error' && errorMessage && (
        <span className="input_label_error">{errorMessage}</span>
      )}
      {OptionContents}
    </div>
  )
}

TextField.defaultProps = {
  size: 'lg',
  type: 'default',
  placeholder: '입력해주세요.',
  handleFocus: false,
  isShowClear: false,
  regExp: undefined,
  onChange: () => {},
}
