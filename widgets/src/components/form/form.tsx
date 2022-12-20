import clsx from 'clsx'
import { AnimatePresence, motion as Animated } from 'framer-motion'
import { h, JSX } from 'preact'
import { forwardRef } from 'preact/compat'

export interface FormProps extends JSX.HTMLAttributes<HTMLFormElement> {}

export const Form = forwardRef<HTMLFormElement, Partial<FormProps>>(
  (attributes, ref) => {
    const styles = clsx({
      ['tly-form']: true,
    })

    const classes = clsx(styles, attributes.className)

    return (
      <Animated.form
        animate={{
          transition: {
            type: 'spring',
            bounce: 0,
            delay: 0.2,
            duration: 0.4,
            delayChildren: 0.2,
            staggerChildren: 0.1,
          },
        }}
        {...attributes}
        className={classes}
        ref={ref}
      >
        <AnimatePresence>{attributes.children}</AnimatePresence>
      </Animated.form>
    )
  }
)
