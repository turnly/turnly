import { h, JSX, VNode } from 'preact'
import { createPortal } from 'preact/compat'
import { useState } from 'preact/hooks'

import { PortalHead } from './portal-head'

export interface IPortalProps extends JSX.HTMLAttributes<HTMLIFrameElement> {
  children: VNode<{}>
}

export const Portal = ({ children, ...props }: IPortalProps) => {
  const [isMounted, setMounted] = useState(false)
  const [ref, setRef] = useState<HTMLIFrameElement | null>(null)
  const doc = ref?.contentDocument

  const renderPortal = () => {
    if (!doc || !isMounted) return null

    const head = createPortal(<PortalHead title={props.title} />, doc?.head)
    const body = createPortal(children, doc?.body)

    return [head, body]
  }

  return (
    <iframe
      tabIndex={0}
      {...props}
      ref={setRef}
      onLoad={() => setMounted(true)}
    >
      {renderPortal()}
    </iframe>
  )
}
