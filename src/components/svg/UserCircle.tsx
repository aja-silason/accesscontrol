import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const UserCicleSvg = (props: SvgProps) => (
  <Svg
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      d="M10 18.833a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z"
      stroke="#020100"
    />
    <Path
      d="M6.25 14.667c1.943-2.035 5.536-2.131 7.5 0m-1.67-6.25c0 1.15-.935 2.083-2.087 2.083a2.085 2.085 0 0 1-2.086-2.083c0-1.15.934-2.084 2.086-2.084 1.152 0 2.086.933 2.086 2.084Z"
      stroke="#020100"
      strokeLinecap="round"
    />
  </Svg>
)

export default UserCicleSvg
