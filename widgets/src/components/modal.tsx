import { AnimatePresence, motion as Animated } from 'framer-motion'
import { Fragment, h, JSX } from 'preact'

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
  return (
    <Fragment>
      <AnimatePresence>
        {isShowing && (
          <Animated.div
            className="tly-modal-container"
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
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
          </Animated.div>
        )}
      </AnimatePresence>
    </Fragment>
  )
}
