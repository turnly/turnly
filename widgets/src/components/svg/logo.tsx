import { h } from 'preact'
import { memo } from 'preact/compat'

import { TSvg } from './interfaces'

export enum LogoType {
  ISOTYPE = 'isotype',
  FULL = 'full',
}

interface TSvgProps extends TSvg {
  variant?: LogoType
}

const Isotype = ({ color, background }: TSvg) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="61.221"
    height="39.201"
    viewBox="0 0 61.221 39.201"
  >
    <g transform="translate(-32.779 -281.999)">
      <path
        d="M72.686,106.389a2.539,2.539,0,0,1-2.506,2.564h-34.4a12.982,12.982,0,0,1-3.822-.561,13.637,13.637,0,0,1,0-26.027,13.174,13.174,0,0,1,3.822-.565H61.226a6.191,6.191,0,0,1,6.021,5.108H35.957A8.686,8.686,0,0,0,29.823,89.5a8.327,8.327,0,0,0-2.432,6.041,8.455,8.455,0,0,0,8.371,8.305h34.4a2.507,2.507,0,0,1,1.785.763A2.424,2.424,0,0,1,72.686,106.389Z"
        transform="translate(10.379 200.199)"
        fill={color}
      />
      <path
        d="M128.905,151.888a13.648,13.648,0,0,1-9.562,13.013,13.151,13.151,0,0,1-3.82.561H90.079a6.188,6.188,0,0,1-6.021-5.108h31.29a8.688,8.688,0,0,0,6.136-2.595,8.423,8.423,0,0,0-5.941-14.342H81.164a2.564,2.564,0,1,1,0-5.128h34.378a12.956,12.956,0,0,1,3.819.561A13.706,13.706,0,0,1,128.905,151.888Z"
        transform="translate(-34.905 154.682)"
        fill={background}
      />
      <circle
        cx="2.544"
        cy="2.544"
        r="2.544"
        transform="translate(36.602 317.602) rotate(-45)"
        fill={background}
      />
    </g>
  </svg>
)

const Full = ({ color, background }: TSvg) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="202.221"
    height="63"
    viewBox="0 0 202.221 63"
  >
    <g transform="translate(-32.779 -268)">
      <text
        transform="translate(105 316)"
        fill="#1c2b33"
        fontSize="48"
        fontFamily="DMSans-Medium, DM Sans"
        fontWeight="500"
        letterSpacing="-0.016em"
      >
        <tspan x="0" y="0">
          turnly
        </tspan>
      </text>
      <path
        d="M72.686,106.389a2.539,2.539,0,0,1-2.506,2.564h-34.4a12.982,12.982,0,0,1-3.822-.561,13.637,13.637,0,0,1,0-26.027,13.174,13.174,0,0,1,3.822-.565H61.226a6.191,6.191,0,0,1,6.021,5.108H35.957A8.686,8.686,0,0,0,29.823,89.5a8.327,8.327,0,0,0-2.432,6.041,8.455,8.455,0,0,0,8.371,8.305h34.4a2.507,2.507,0,0,1,1.785.763A2.424,2.424,0,0,1,72.686,106.389Z"
        transform="translate(10.379 200.199)"
        fill={color}
      />
      <path
        d="M128.905,151.888a13.648,13.648,0,0,1-9.562,13.013,13.151,13.151,0,0,1-3.82.561H90.079a6.188,6.188,0,0,1-6.021-5.108h31.29a8.688,8.688,0,0,0,6.136-2.595,8.423,8.423,0,0,0-5.941-14.342H81.164a2.564,2.564,0,1,1,0-5.128h34.378a12.956,12.956,0,0,1,3.819.561A13.706,13.706,0,0,1,128.905,151.888Z"
        transform="translate(-34.905 154.682)"
        fill={background}
      />
      <circle
        cx="2.544"
        cy="2.544"
        r="2.544"
        transform="translate(36.602 317.602) rotate(-45)"
        fill={background}
      />
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
