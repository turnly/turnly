import { useGeolocated } from 'react-geolocated'

export const useGeolocation = () => {
  const {
    coords,
    isGeolocationAvailable: isAvailable,
    isGeolocationEnabled: isEnabled,
    positionError: error,
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 9_000,
  })

  return {
    isAvailable,
    isEnabled,
    coords,
    error,
  }
}
