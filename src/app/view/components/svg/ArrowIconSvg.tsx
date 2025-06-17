import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const ArrowRight = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      d="M9 6s6 4.419 6 6c0 1.581-6 6-6 6"
      stroke="#787878"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export {ArrowRight}
