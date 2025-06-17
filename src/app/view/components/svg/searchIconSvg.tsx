import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SearchIconSvg = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      d="m14.583 14.583 3.75 3.75"
      stroke="#667085"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.667 9.167a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0Z"
      stroke="#667085"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
)

export default SearchIconSvg
