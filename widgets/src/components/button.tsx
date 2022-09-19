import clsx from 'clsx'
import { h, JSX } from 'preact'
import { Children, forwardRef } from 'preact/compat'

import { useAppearance } from '../hooks/use-appearance'

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  isSmall: boolean
  isMedium: boolean
  isLarge: boolean
  isFull: boolean
  isSecondary: boolean
  isLoading: boolean
  isPrimary: boolean
  isDanger: boolean
  isOutline: boolean
}

export const Button = forwardRef<HTMLButtonElement, Partial<ButtonProps>>(
  (
    {
      isPrimary,
      isDanger,
      isOutline,
      isSecondary,
      isLarge,
      isMedium,
      isSmall,
      isFull,
      isLoading,
      children,
      disabled,
      ...attributes
    },
    ref
  ) => {
    const { isFlat, isRounded } = useAppearance()

    const styles = clsx({
      ['tly-button']: true,
      ['tly-button--is-primary']: isPrimary,
      ['tly-button--is-secondary']: isSecondary,
      ['tly-button--is-outline']: isOutline,
      ['tly-button--is-danger']: isDanger,
      ['tly-button--is-full']: isFull,
      ['tly-button--is-large']: isLarge,
      ['tly-button--is-medium']: isMedium,
      ['tly-button--is-small']: isSmall,
      ['tly-button--is-flat']: isFlat,
      ['tly-button--is-rounded']: isRounded,
    })

    const classes = clsx(styles, attributes.className)

    return (
      <button
        {...attributes}
        className={classes}
        disabled={disabled || isLoading}
        ref={ref}
      >
        {Children.map(children, (child, i) => (
          <span
            key={i}
            className="mr-xsmall last:mr-0"
            {...{ children: child }}
          />
        ))}
      </button>
    )
  }
)
