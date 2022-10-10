import clsx from 'clsx'
import { Fragment, h, JSX } from 'preact'
import { forwardRef } from 'preact/compat'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { PatternFormat } from 'react-number-format'

import { Text } from '../typography'

export interface InputProps extends JSX.HTMLAttributes<HTMLInputElement> {
  isDanger?: boolean
  textError?: string
  isIcon?: boolean
  iconRight?: JSX.Element
  onIconClick?: () => void
  isFormat: boolean
  format: string
  value: string
  defaultValue: string
  type: any
}

export const Input = forwardRef<HTMLInputElement, Partial<InputProps>>(
  (
    {
      isDanger = false,
      textError,
      isIcon,
      iconRight,
      disabled,
      isFormat,
      format = '',
      onIconClick,
      ...attributes
    },
    ref
  ) => {
    const styles = clsx({
      ['tly-input']: true,
      ['tly-input--is-danger']: isDanger,
      ['tly-input--is-icon']: isIcon,
    })

    const classes = clsx(styles, attributes.className)

    return (
      <Fragment>
        <div className="tly-input-icon-container">
          {!isFormat && (
            <input
              {...attributes}
              disabled={disabled}
              className={classes}
              ref={ref}
            />
          )}

          {isFormat && (
            <PatternFormat
              {...attributes}
              className={classes}
              disabled={disabled}
              format={format}
              ref={ref}
            />
          )}

          {isIcon && (
            <div className="tly-input-icon" onClick={onIconClick}>
              {!iconRight ? <AiOutlineQuestionCircle /> : iconRight}
            </div>
          )}
        </div>

        {isDanger && (
          <Text isDanger isSmall>
            {textError}
          </Text>
        )}
      </Fragment>
    )
  }
)
