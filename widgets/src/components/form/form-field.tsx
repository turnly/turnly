import clsx from 'clsx'
import { motion as Animated } from 'framer-motion'
import { h, JSX } from 'preact'
import { forwardRef } from 'preact/compat'

export interface FormFieldProps extends JSX.HTMLAttributes<HTMLDivElement> {
  isColumn: boolean
  addGaps: boolean
}

export const FormField = forwardRef<HTMLDivElement, Partial<FormFieldProps>>(
  ({ isColumn, addGaps = false, ...attributes }, ref) => {
    const styles = clsx({
      ['tly-form-field']: true,
      ['tly-form-field--is-column']: isColumn,
      ['tly-form-field--add-gaps']: addGaps,
    })

    const classes = clsx(styles, attributes.className)

    return (
      <Animated.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        {...attributes}
        className={classes}
        ref={ref}
      />
    )
  }
)
