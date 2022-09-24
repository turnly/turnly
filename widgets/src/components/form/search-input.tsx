import clsx from 'clsx'
import { h, JSX } from 'preact'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'preact/compat'
import { FiSearch } from 'react-icons/fi'

import { Nullable } from '../../@types/shared'
import { useDebounce } from '../../hooks/use-debounce'
import { LoadingIcon } from '../spinner'

export type InputElement = Nullable<HTMLInputElement>
export interface InputProps extends JSX.HTMLAttributes<HTMLInputElement> {
  isLoading: boolean
  onSearchChange?: (searchTerm: string) => void
}

export const SearchInput = forwardRef<HTMLInputElement, Partial<InputProps>>(
  ({ isLoading, onSearchChange, ...attributes }, ref) => {
    const [search, setSearch] = useState('')
    const debounced = useDebounce(search)
    const inputRef = useRef<InputElement>(null)

    useImperativeHandle<InputElement, InputElement>(ref, () => inputRef.current)

    useEffect(() => {
      if (onSearchChange) onSearchChange(debounced)
    }, [debounced])

    return (
      <div className="tly-search-input-container">
        <input
          {...attributes}
          onChange={e => setSearch(e.currentTarget.value)}
          className={clsx('tly-search-input', attributes.className)}
          type="text"
          autoComplete="off"
          ref={inputRef}
        />
        <div className="tly-search-input-icon">
          <FiSearch />
        </div>

        {isLoading && <LoadingIcon />}
      </div>
    )
  }
)
