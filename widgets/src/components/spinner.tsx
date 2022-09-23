import { h } from 'preact'
import { memo } from 'preact/compat'

import { useLoading } from '../hooks/use-loading'

export const Loading = memo(() => (
  <div className="tly-spinner-wrapper">
    <div className="tly-spinner-content" />
  </div>
))

export const Spinner = () => {
  const { isLoading } = useLoading()

  return isLoading ? <Loading /> : null
}

export const LoadingIcon = () => (
  <div className="tly-spinner-wrapper tly-spinner-wrapper--is-small">
    <div className="tly-spinner-content tly-spinner-content--is-small" />
  </div>
)
