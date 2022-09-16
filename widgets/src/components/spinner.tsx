import { h } from 'preact'

import { useLoading } from '../hooks/use-loading'

export const Spinner = () => {
  const { isLoading } = useLoading()

  return isLoading ? (
    <div className="tly-spinner-wrapper">
      <div className="tly-spinner-content" />
    </div>
  ) : null
}
