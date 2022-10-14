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
    const queryParams = new URLSearchParams(params).toString()
    const path = `${window?.location.href}?${queryParams}`

    window.history.pushState({ path }, '', path)
  }

  return { params, setSearchParams }
}
