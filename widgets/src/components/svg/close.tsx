import { h } from 'preact'

import { TSvg } from './interfaces'

export const CloseIcon = ({ color = '#455964' }: TSvg) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14.828"
    height="14.828"
    viewBox="0 0 14.828 14.828"
  >
    <path
      d="M6,18,18,6M6,6,18,18"
      transform="translate(-4.586 -4.586)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      opacity="0.951"
    />
  </svg>
)
