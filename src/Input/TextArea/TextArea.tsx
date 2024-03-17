import classnames from 'classnames'
import React, {CSSProperties} from 'react'
import './TextArea.scss'

type TextAreaProps = {
  id?: string
  style?: CSSProperties
  type?: 'default' | 'resize'
  className?: string
  disabled?: boolean | undefined
  placeholder?: string | undefined
  value?: string | undefined
  label?: string | undefined
  isState?: 'default' | 'error'
  errorMessage?: string | undefined
  isRequired?: boolean | undefined
  handleFocus?: boolean
  onChange: (e: {id: string | null; value: string | undefined}) => void
}

export default function TextArea({
  id,
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
  handleFocus,
  onChange,
  ...props
}: TextAreaProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const textareaVirtualRef = React.useRef<HTMLTextAreaElement>(null)

  const csStyle: CSSProperties = style || {}

  const defaultHeight = 28

  const [isFocus, setIsFocus] = React.useState<boolean>(false)
  const [height, setHeight] = React.useState<number>(defaultHeight)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({id: e.target.id || null, value: e.target.value})
  }

  const handleHeight = () => {
    const beHeight = textareaVirtualRef.current?.scrollHeight
    setHeight(beHeight ? beHeight : defaultHeight)
  }

  React.useEffect(() => {
    if (textareaRef && handleFocus) {
      textareaRef.current?.focus()
    }
  }, [handleFocus, textareaRef])

  React.useEffect(() => {
    if (textareaVirtualRef.current) {
      handleHeight()
    }
  }, [value])

  return (
    <div className={classnames('textarea_container', className)} style={csStyle}>
      {label && (
        <span className="input_label">
          {label}&nbsp;
          {isRequired && <span className="required">*</span>}
        </span>
      )}
      <div
        className={classnames(
          'textarea_wrap',
          type,
          isState,
          isFocus && 'is_focus',
          disabled && 'disabled',
        )}>
        <textarea
          ref={textareaRef}
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          style={{height}}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(e) => handleChange(e)}
          {...props}></textarea>

        <textarea
          ref={textareaVirtualRef}
          id={`${id}-virtual`}
          value={value}
          readOnly={true}
          className="virtual"
          style={{height: defaultHeight}}
          {...props}></textarea>
      </div>
      {isState === 'error' && errorMessage && (
        <span className="input_label_error">{errorMessage}</span>
      )}
    </div>
  )
}

TextArea.defaultProps = {
  size: 'lg',
  type: 'default',
  placeholder: '입력해주세요.',
  handleFocus: false,
  onChange: () => {},
}
