import { config } from '../config/global'

export const useGoogleMaps = () => {
  const openGoogleMaps = (longitude: string, latitude: string) => {
    if (window && config.GOOGLE_MAPS_URL) {
      window.open(
        `${config.GOOGLE_MAPS_URL}&query=${longitude},${latitude}`,
        '_blank',
        'noopener,noreferrer'
      )
    }
  }

  return { openGoogleMaps }
}
