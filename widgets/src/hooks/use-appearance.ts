import { useMemo } from 'preact/hooks'

import { useSettings } from './use-settings'

export const useAppearance = () => {
  const { appearance } = useSettings()

  const isFlat = useMemo(() => appearance.design === 'flat', [])
  const isRounded = useMemo(() => appearance.design === 'rounded', [])
  const isLeftPosition = useMemo(() => appearance.position === 'left', [])

  return {
    isFlat,
    isRounded,
    isLeftPosition,
    appearance,
  }
}
