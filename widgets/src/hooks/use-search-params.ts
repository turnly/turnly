import { useMemo } from 'preact/hooks'

type Params = { [k: string]: string }

export const useSearchParams = <P extends Params = Params>() => {
  const params = useMemo(() => {
    const searchParams = Object.fromEntries(
      new URLSearchParams(window?.location.search)
    )

    return searchParams
  }, []) as P

  const setSearchParams = (params: Params) => {
    const path = new URL(window?.location as unknown as URL)

    // assigns the params to the url
    Object.entries(params).map(([key, value]) =>
      path.searchParams.set(key, value)
    )

    window.history.pushState({}, '', path)
  }

  return { params, setSearchParams }
}
