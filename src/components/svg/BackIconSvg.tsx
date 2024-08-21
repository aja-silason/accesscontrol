import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

const BackIconSvg = (props: SvgProps) => (
  <Svg
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Circle cx={24} cy={24} r={24} fill="#F5BD00" />
    <Path
      d="M27 18s-6 4.419-6 6c0 1.581 6 6 6 6"
      stroke="#020100"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default BackIconSvg
