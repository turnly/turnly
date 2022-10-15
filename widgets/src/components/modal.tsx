import clsx from 'clsx'
import { h, JSX } from 'preact'

import { Text, Title } from '../components/typography'
import { Button, ButtonProps } from './button'

export interface ModalProps extends JSX.HTMLAttributes<HTMLDivElement> {
  isShowing: boolean
  title: string
  description: string
  buttons: Partial<ButtonProps>[]
}

export const Modal = ({
  isShowing,
  title,
  description,
  buttons,
}: ModalProps) => {
  const classes = clsx({
    ['tly-modal-container']: true,
    ['tly-modal--is-open']: isShowing,
  })

  return (
    <div className={classes}>
      <div className="tly-modal">
        <div>
          <Title>{title}</Title>

          <Text>{description}</Text>
        </div>

        <div className="tly-modal-footer">
          {buttons.map(({ children, ...button }, index) => (
            <Button key={`modal-footer-button-${index}`} {...button}>
              {children}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
