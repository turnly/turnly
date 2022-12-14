import clsx from 'clsx'
import { Fragment, h, JSX } from 'preact'
import { forwardRef } from 'preact/compat'
import Base from 'react-phone-input-2'

import { Text } from '../typography'

export interface PhoneProps extends JSX.HTMLAttributes<HTMLInputElement> {
  isDanger: boolean
  textError: string
}

export const PhoneInput = forwardRef<HTMLInputElement, Partial<PhoneProps>>(
  ({ isDanger, textError, ...attributes }, ref) => {
    const styles = clsx({
      ['tly-phone-input']: true,
      ['tly-phone-input--is-danger']: isDanger,
    })

    const classes = clsx(styles, attributes.className)

    return (
      <Fragment>
        <Base ref={ref} inputClass={classes} {...attributes} />

        {isDanger && (
          <Text isDanger isSmall>
            {textError}
          </Text>
        )}
      </Fragment>
    )
  }
)
