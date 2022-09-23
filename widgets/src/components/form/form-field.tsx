import clsx from 'clsx'
import { h, JSX } from 'preact'
import { forwardRef } from 'preact/compat'

export interface FormFieldProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export const FormField = forwardRef<HTMLDivElement, Partial<FormFieldProps>>(
  (attributes, ref) => {
    const styles = clsx({
      ['tly-form-field']: true,
    })

    const classes = clsx(styles, attributes.className)

    return <div {...attributes} className={classes} ref={ref} />
  }
)
