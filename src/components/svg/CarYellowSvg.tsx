import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"

const CarSvgIcon = (props: SvgProps) => (
  <Svg
    width={61}
    height={56}
    fill="none"
    {...props}
  >
    <Rect width={60.16} height={55.704} rx={7.219} fill="#FFDF66" />
    <Path
      d="M28 25v2"
      stroke="#422006"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M35 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM25 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke="#422006"
      strokeWidth={1.5}
    />
    <Path
      d="M23 33.972c-1.097-.054-1.78-.217-2.268-.704C20 32.535 20 31.357 20 29v-4c0-2.357 0-3.535.732-4.268C21.465 20 22.643 20 25 20h3.3c1.117 0 1.675 0 2.127.147a3 3 0 0 1 1.926 1.926c.147.452.147 1.01.147 2.127 0 .745 0 1.117.098 1.418a2 2 0 0 0 1.284 1.284c.301.098.674.098 1.418.098H40v2c0 2.357 0 3.535-.732 4.268-.487.487-1.171.65-2.268.704M27 34h6"
      stroke="#422006"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M32.5 22h1.821c1.456 0 2.183 0 2.775.354.593.353.938.994 1.628 2.276L40 27"
      stroke="#422006"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M24 25v2"
      stroke="#422006"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
)

export default CarSvgIcon
