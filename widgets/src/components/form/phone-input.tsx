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
    return (
      <Fragment>
        <Base
          {...attributes}
          ref={ref}
          onChange={() => {}}
          inputClass="tly-phone-input"
        />

        {isDanger && (
          <Text isDanger isSmall>
            {textError}
          </Text>
        )}
      </Fragment>
    )
  }
)
