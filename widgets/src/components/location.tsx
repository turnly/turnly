import clsx from 'clsx'
import { h, JSX } from 'preact'
import { forwardRef } from 'preact/compat'

import { Text, Title } from './typography'

export interface LocationProps extends JSX.HTMLAttributes<HTMLInputElement> {
  title: string
  description: string
  iconRight: JSX.Element
  isPrimary: boolean
}

export const Location = forwardRef<HTMLDivElement, Partial<LocationProps>>(
  ({ isPrimary, title, description, iconRight, ...attributes }, ref) => {
    const styles = clsx({
      ['tly-location']: true,
      ['tly-location--is-primary']: isPrimary,
    })

    const classes = clsx(styles, attributes.className)

    return (
      <div className={classes} ref={ref}>
        <div>
          <Title hasGaps={false} level={3}>
            {title}
          </Title>
          <Text hasGaps={false} isSmall>
            {description}
          </Text>
        </div>

        {iconRight && <div className="tly-location-button">{iconRight}</div>}
      </div>
    )
  }
)
