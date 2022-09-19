import { useCallback, useEffect } from 'preact/hooks'

import { useAppearance } from './use-appearance'

export const useStyleVariables = () => {
  const { appearance } = useAppearance()

  const setVariable = useCallback((variable: string, value: string) => {
    if (value) document.documentElement.style.setProperty(variable, value)
  }, [])

  useEffect(() => {
    setVariable('--tly-primary-bg', appearance.primary.background)
    setVariable('--tly-primary-color', appearance.primary.color)

    setVariable('--tly-secondary-bg', appearance.secondary.background)
    setVariable('--tly-secondary-color', appearance.secondary.color)
  }, [appearance])
}
