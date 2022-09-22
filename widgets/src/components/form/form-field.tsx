import clsx from 'clsx'
import { h, JSX } from 'preact'
import React from 'preact/compat'

export interface FormFieldProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export const FormField = React.forwardRef<
  HTMLDivElement,
  Partial<FormFieldProps>
>(({ children, ...attributes }, ref) => {
  const styles = clsx({
    ['tly-form-field']: true,
  })

  const classes = clsx(styles, attributes.className)

  return (
    <div {...attributes} className={classes} ref={ref}>
      {children}
    </div>
  )
})
