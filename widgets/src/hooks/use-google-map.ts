import { config } from '../config/global'

export const useGoogleMap = () => {
  const openGoogleMap = (longitude: string, latitude: string) => {
    if (window) {
      window.open(
        `${config.GOOGLE_MAP_URL}&query=${longitude},${latitude}`,
        '_blank',
        'noopener,noreferrer'
      )
    }
  }

  return { openGoogleMap }
}
