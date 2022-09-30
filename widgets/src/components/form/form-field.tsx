import clsx from 'clsx'
import { h, JSX } from 'preact'
import { forwardRef } from 'preact/compat'

export interface FormFieldProps extends JSX.HTMLAttributes<HTMLDivElement> {
  isColumn: boolean
}

export const FormField = forwardRef<HTMLDivElement, Partial<FormFieldProps>>(
  ({ isColumn, ...attributes }, ref) => {
    const styles = clsx({
      ['tly-form-field']: true,
      ['tly-form-field--is-column']: isColumn,
    })

    const classes = clsx(styles, attributes.className)

    return <div {...attributes} className={classes} ref={ref} />
  }
)
