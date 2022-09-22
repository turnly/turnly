import clsx from 'clsx'
import { h, JSX } from 'preact'
import React from 'preact/compat'

export interface FormProps extends JSX.HTMLAttributes<HTMLFormElement> {}

export const Form = React.forwardRef<HTMLFormElement, Partial<FormProps>>(
  ({ children, ...attributes }, ref) => {
    const styles = clsx({
      ['tly-form']: true,
    })

    const classes = clsx(styles, attributes.className)

    return (
      <form {...attributes} className={classes} ref={ref}>
        {children}
      </form>
    )
  }
)
