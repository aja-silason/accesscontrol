import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const FuelSVG = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      d="M10.111 4.5H8c-1.886 0-2.828 0-3.414.586C4 5.672 4 6.614 4 8.5V16c0 2.828 0 4.243.879 5.121C5.757 22 7.172 22 10 22h4c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-2.556c0-2.405 0-3.608-.597-4.575-.598-.966-1.674-1.504-3.825-2.58l-1.889-.944c-.84-.42-1.261-.631-1.714-.738-.454-.107-.923-.107-1.864-.107Z"
      stroke="#020100"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 18c1.105 0 2-.84 2-1.875C14 14.875 12 13 12 13s-2 1.875-2 3.125C10 17.16 10.895 18 12 18ZM12.5 8l4 2M6 4.5v-.75c0-.702 0-1.053.169-1.306a1 1 0 0 1 .275-.275C6.697 2 7.048 2 7.75 2c.702 0 1.053 0 1.306.169a1 1 0 0 1 .275.275c.169.253.169.604.169 1.306v.75"
      stroke="#020100"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default FuelSVG
