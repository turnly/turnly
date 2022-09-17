import { h, JSX } from 'preact'
import { Children } from 'preact/compat'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  isLoading?: boolean
} & JSX.HTMLAttributes<HTMLButtonElement>

export const Button = ({
  isLoading = false,
  children,
  ...attributes
}: ButtonProps) => {
  return (
    <button
      {...attributes}
      disabled={attributes.disabled || isLoading}
      className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {Children.map(children, (child, i) => (
        <span key={i} className="mr-xsmall text-white last:mr-0">
          {child}
        </span>
      ))}
    </button>
  )
}
