import { useCallback, useEffect } from 'preact/hooks'

import { Nullable } from '../@types/shared'
import { useAppearance } from './use-appearance'

export const useStyleVariables = (doc?: Nullable<Document>) => {
  const { appearance } = useAppearance()

  const setVariable = useCallback(
    (variable: string, value: string) => {
      if (doc && value) doc.documentElement.style.setProperty(variable, value)
    },
    [doc]
  )

  useEffect(() => {
    setVariable('--tly-primary-bg', appearance.primary.background)
    setVariable('--tly-primary-color', appearance.primary.color)

    setVariable('--tly-secondary-bg', appearance.secondary.background)
    setVariable('--tly-secondary-color', appearance.secondary.color)

    setVariable('--tly-z-index', String(appearance.zIndex))
    setVariable('--tly-widget-position', appearance.position)
  }, [doc, appearance])
}
