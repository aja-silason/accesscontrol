import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const TruckSvg = (props: SvgProps) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      d="M5.833 5.25v1.167"
      stroke="#020100"
      strokeWidth={0.875}
      strokeLinecap="round"
    />
    <Path
      d="M9.917 11.667a1.167 1.167 0 1 0 0-2.334 1.167 1.167 0 0 0 0 2.334ZM4.083 11.667a1.167 1.167 0 1 0 0-2.334 1.167 1.167 0 0 0 0 2.334Z"
      stroke="#020100"
      strokeWidth={0.875}
    />
    <Path
      d="M2.917 10.484c-.64-.032-1.04-.127-1.323-.411-.427-.427-.427-1.115-.427-2.49V5.25c0-1.375 0-2.062.427-2.49.427-.427 1.114-.427 2.49-.427h1.924c.652 0 .978 0 1.241.086.533.173.95.59 1.124 1.124.085.263.085.589.085 1.24 0 .435 0 .652.057.828.116.355.394.633.75.749.175.057.392.057.827.057h2.741v1.166c0 1.375 0 2.063-.427 2.49-.284.284-.683.38-1.323.41M5.25 10.5h3.5"
      stroke="#020100"
      strokeWidth={0.875}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.458 3.5h1.063c.849 0 1.273 0 1.618.206.346.207.547.58.95 1.328l.744 1.383"
      stroke="#020100"
      strokeWidth={0.875}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.5 5.25v1.167"
      stroke="#020100"
      strokeWidth={0.875}
      strokeLinecap="round"
    />
  </Svg>
)

export default TruckSvg
