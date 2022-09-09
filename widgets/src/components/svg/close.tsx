import { h } from 'preact'

import { TSvg } from './interfaces'

export const CloseIcon = ({ color = '#565757' }: TSvg) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="11"
    viewBox="0 0 11 11"
    transform="rotate(45)"
  >
    <g transform="translate(4.5)" fill={color} stroke={color} strokeWidth="1">
      <rect width="2" height="11" stroke="none" />
      <rect x="0.5" y="0.5" width="1" height="10" fill="none" />
    </g>
    <g
      transform="translate(11 4.5) rotate(90)"
      fill={color}
      stroke={color}
      strokeWidth="1"
    >
      <rect width="2" height="11" stroke="none" />
      <rect x="0.5" y="0.5" width="1" height="10" fill="none" />
    </g>
  </svg>
)
