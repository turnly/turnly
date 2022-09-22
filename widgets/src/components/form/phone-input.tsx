import { Fragment, h, JSX } from 'preact'
import React from 'preact/compat'
import Base from 'react-phone-input-2'

import { Text } from '../typography'

export interface PhoneInputProps extends JSX.HTMLAttributes<HTMLInputElement> {
  isDanger: boolean
  textError: string
}

export const PhoneInput = React.forwardRef<
  HTMLInputElement,
  Partial<PhoneInputProps>
>(({ isDanger, textError, ...attributes }, ref) => {
  return (
    <Fragment>
      <Base
        {...attributes}
        ref={ref}
        onChange={() => {}}
        inputClass="tly-phone-input"
      />

      {isDanger && (
        <Text isDanger={true} isSmall>
          {textError}
        </Text>
      )}
    </Fragment>
  )
})
