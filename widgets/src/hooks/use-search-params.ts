import { useMemo } from 'preact/hooks'

type Params = { [k: string]: string }

export const useSearchParams = <P extends Params = Params>() => {
  const params = useMemo(() => {
    const searchParams = Object.fromEntries(
      new URLSearchParams(window?.location.search)
    )

    return searchParams
  }, []) as P

  return { params }
}
