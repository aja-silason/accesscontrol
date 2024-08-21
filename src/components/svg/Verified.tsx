
import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

const VerifiedSVG = (props: SvgProps) => (
  <Svg
    width={90}
    height={90}
    fill="none"
    {...props}
  >
    <Circle cx={45} cy={45} r={45} fill="#0ABD49" />
    <Path
      d="m28.083 49.833 8.459 8.459 25.375-26.584"
      stroke="#fff"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default VerifiedSVG
