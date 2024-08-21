import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SettingsIconSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M10 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17 8.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
      stroke="#fff"
      strokeWidth={1.5}
    />
    <Path
      d="M8.5 14V7M15.5 10v7"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
)

export default SettingsIconSvg

const SettingsIconSvgBlack = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Z"
      stroke="#020100"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M10 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17 8.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
      stroke="#020100"
      strokeWidth={1.5}
    />
    <Path
      d="M8.5 14V7M15.5 10v7"
      stroke="#020100"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
)

export {SettingsIconSvgBlack}
