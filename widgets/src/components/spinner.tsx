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

export const LoadingIcon = () => (
  <div className="tly-spinner-wrapper tly-spinner-wrapper--is-small">
    <div className="tly-spinner-content tly-spinner-content--is-small" />
  </div>
)
