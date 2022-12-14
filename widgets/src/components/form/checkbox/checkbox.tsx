import clsx from 'clsx'
import { h } from 'preact'
import { forwardRef, HTMLAttributes } from 'preact/compat'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BsCircle } from 'react-icons/bs'

import { Text } from '../../typography/text'

export interface CheckboxProps extends HTMLAttributes<HTMLDivElement> {
  isSelected: boolean
  label: string
}

export const Checkbox = forwardRef<HTMLInputElement, Partial<CheckboxProps>>(
  ({ isSelected, label, onClick, ...attributes }) => {
    const styles = clsx({
      ['tly-checkbox']: true,
    })
    const classes = clsx(styles, attributes.className)

    return (
      <div
        className={`${classes} ${isSelected && 'tly-checkbox--is-selected'}`}
        onClick={onClick}
        {...attributes}
      >
        {!isSelected && (
          <div className="tly-checkbox-icon">
            <BsCircle size={18} />
          </div>
        )}

        {isSelected && (
          <div className="tly-checkbox-icon--is-selected">
            <AiFillCheckCircle size={18} />
          </div>
        )}

        <Text hasGaps={false}>{label}</Text>
      </div>
    )
  }
)
