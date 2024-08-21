import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

const DeniedSvg = (props: SvgProps) => (
  <Svg
    width={68}
    height={68}
    fill="none"
    {...props}
  >
    <Circle cx={34} cy={34} r={34} fill="#CF222E" />
    <Path
      d="M46.782 21.218 21.22 46.781m0-25.563 25.563 25.563"
      stroke="#fff"
      strokeWidth={2.739}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default DeniedSvg
