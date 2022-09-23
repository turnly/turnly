import clsx from 'clsx'
import { h, JSX } from 'preact'
import { forwardRef } from 'preact/compat'
import { FiSend } from 'react-icons/fi'

import { Text, Title } from './typography'

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
}

export const CurrentLocation = forwardRef<HTMLDivElement, Partial<Props>>(
  ({ title, description, ...attributes }, ref) => {
    const classes = clsx('tly-current-location', attributes.className)

    return (
      <div className={classes} ref={ref}>
        <div className="tly-current-location-details">
          <Title hasGaps={false} level={5}>
            {title}
          </Title>
          <Text hasGaps={false} isSmall>
            {description}
          </Text>
        </div>

        <div className="tly-current-location-button">
          <FiSend color="#2485BA" />
        </div>
      </div>
    )
  }
)
