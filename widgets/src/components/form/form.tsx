import clsx from 'clsx'
import { h, JSX } from 'preact'
import { forwardRef } from 'preact/compat'

export interface FormProps extends JSX.HTMLAttributes<HTMLFormElement> {}

export const Form = forwardRef<HTMLFormElement, Partial<FormProps>>(
  (attributes, ref) => {
    const styles = clsx({
      ['tly-form']: true,
    })

    const classes = clsx(styles, attributes.className)

    return <form {...attributes} className={classes} ref={ref} />
  }
)
