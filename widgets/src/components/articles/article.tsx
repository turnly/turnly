import { h } from 'preact'

import { Button, ButtonProps } from '../button'
import { Text, Title } from '../typography'

interface Props {
  title: string
  description: string
  subtitle?: string
  buttonText: string
  buttonProps: Partial<ButtonProps>
}

export const Article = ({
  title,
  description,
  subtitle,
  buttonText,
  buttonProps,
}: Props) => (
  <div className="tly-home-articles__article">
    <div className="tly-home-articles__article-header">
      {subtitle && (
        <Text isUpper isSmall isDisabled hasGaps>
          {subtitle}
        </Text>
      )}

      <Title level={3}>{title}</Title>
      <Text>{description}</Text>
    </div>

    <Button {...buttonProps} isSmall>
      {buttonText}
    </Button>
  </div>
)
