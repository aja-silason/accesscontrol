import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

const AlertSvg = (props: SvgProps) => (
  <Svg
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Circle cx={24} cy={24} r={24} fill="#FFDF66" />
    <Path
      d="M16.209 21.297c2.816-4.983 4.224-7.474 6.156-8.116a5.186 5.186 0 0 1 3.27 0c1.932.642 3.34 3.133 6.156 8.116 2.816 4.982 4.224 7.474 3.802 9.504a5.434 5.434 0 0 1-1.636 2.894c-1.51 1.388-4.325 1.388-9.957 1.388-5.632 0-8.448 0-9.957-1.388a5.434 5.434 0 0 1-1.636-2.894c-.422-2.03.986-4.522 3.802-9.504Z"
      stroke="#020100"
      strokeWidth={1.75}
    />
    <Path
      d="M23.99 28.667h.011"
      stroke="#020100"
      strokeWidth={2.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M24 25.167V20.5"
      stroke="#020100"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default AlertSvg
