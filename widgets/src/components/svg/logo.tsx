import { h } from 'preact'
import { memo } from 'preact/compat'

import { TSvg } from './interfaces'

enum LogoType {
  ISOTYPE = 'isotype',
  FULL = 'full',
}

interface TSvgProps extends TSvg {
  variant?: LogoType
}

const Isotype = ({ color, background }: TSvg) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28.074"
    height="17.658"
    viewBox="0 0 28.074 17.658"
  >
    <g transform="translate(-19.9 -79.301)">
      <path
        d="M43.038,90.619A1.362,1.362,0,0,1,41.688,92H26.16a6.091,6.091,0,0,1-1.789-.263,6.376,6.376,0,0,1,0-12.17A6.177,6.177,0,0,1,26.16,79.3H37.646a3.007,3.007,0,0,1,2.972,2.744H26.239a3.693,3.693,0,0,0-2.613,1.1,3.54,3.54,0,0,0-1.035,2.569,3.6,3.6,0,0,0,3.56,3.533H41.679a1.345,1.345,0,0,1,.956.4A1.315,1.315,0,0,1,43.038,90.619Z"
        transform="translate(0 0)"
        fill={color}
      />
      <g transform="translate(22.101 84.254)">
        <path
          d="M99.521,142.157a6.381,6.381,0,0,1-4.472,6.085,6.177,6.177,0,0,1-1.789.263H81.775A3.007,3.007,0,0,1,78.8,145.76H93.182a3.693,3.693,0,0,0,2.613-1.1,3.554,3.554,0,0,0,1.035-2.569,3.6,3.6,0,0,0-3.56-3.533H77.75a1.377,1.377,0,0,1,0-2.753H93.269a6.09,6.09,0,0,1,1.789.263A6.412,6.412,0,0,1,99.521,142.157Z"
          transform="translate(-73.647 -135.8)"
          fill={background}
        />
        <circle
          cx="1.368"
          cy="1.368"
          r="1.368"
          transform="translate(0 9.969)"
          fill={background}
        />
      </g>
    </g>
  </svg>
)

const Full = ({ color, background }: TSvg) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="90.271"
    height="27"
    viewBox="0 0 90.271 27"
  >
    <g transform="translate(12775.438 22485)">
      <g transform="translate(-12795.338 -22559.301)">
        <path
          d="M43.038,90.619A1.362,1.362,0,0,1,41.688,92H26.16a6.091,6.091,0,0,1-1.789-.263,6.376,6.376,0,0,1,0-12.17A6.177,6.177,0,0,1,26.16,79.3H37.646a3.007,3.007,0,0,1,2.972,2.744H26.239a3.693,3.693,0,0,0-2.613,1.1,3.54,3.54,0,0,0-1.035,2.569,3.6,3.6,0,0,0,3.56,3.533H41.679a1.345,1.345,0,0,1,.956.4A1.315,1.315,0,0,1,43.038,90.619Z"
          transform="translate(0 0)"
          fill={color}
        />
        <g transform="translate(22.101 84.254)">
          <path
            d="M99.521,142.157a6.381,6.381,0,0,1-4.472,6.085,6.177,6.177,0,0,1-1.789.263H81.775A3.007,3.007,0,0,1,78.8,145.76H93.182a3.693,3.693,0,0,0,2.613-1.1,3.554,3.554,0,0,0,1.035-2.569,3.6,3.6,0,0,0-3.56-3.533H77.75a1.377,1.377,0,0,1,0-2.753H93.269a6.09,6.09,0,0,1,1.789.263A6.412,6.412,0,0,1,99.521,142.157Z"
            transform="translate(-73.647 -135.8)"
            fill={background}
          />
          <circle
            cx="1.368"
            cy="1.368"
            r="1.368"
            transform="translate(0 9.969)"
            fill={background}
          />
        </g>
      </g>
      <text
        transform="translate(-12743.166 -22464)"
        fill="#1c2b33"
        fontSize="22"
        fontFamily="Cabin-Medium, Cabin"
        fontWeight="500"
      >
        <tspan x="0" y="0">
          Turnly
        </tspan>
      </text>
    </g>
  </svg>
)

export const Logo = memo(
  ({
    color = '#5ACE71',
    background = '#06615A',
    variant = LogoType.ISOTYPE,
  }: TSvgProps) =>
    variant === LogoType.ISOTYPE ? (
      <Isotype color={color} background={background} />
    ) : (
      <Full color={color} background={background} />
    )
)
