import { h, JSX } from 'preact'
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
    <div>
      <Base
        {...attributes}
        ref={ref}
        onChange={() => {}}
        inputStyle={{
          border: 'solid 1px var(--tly-default-border-color)',
          color: 'var(--tly-gray)',
          fontSize: 14,
          padding: 16,
          paddingLeft: 55,
          width: '100%',
        }}
      />

      {isDanger && (
        <Text isDanger={true} isSmall>
          {textError}
        </Text>
      )}
    </div>
  )
})
