import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

const WriteIconSvg = (props: SvgProps) => (
  <Svg
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <Circle cx={30} cy={30} r={30} fill="#FFDF66" />
    <Path
      d="m34.916 21.813 1.636-1.636a2.313 2.313 0 0 1 3.27 3.271l-1.635 1.636m-3.27-3.271-6.107 6.106c-1.22 1.22-1.83 1.83-2.244 2.572-.415.743-.833 2.498-1.233 4.176 1.678-.4 3.433-.818 4.176-1.233.743-.415 1.352-1.025 2.572-2.244l6.106-6.106m-3.27-3.271 3.27 3.27"
      stroke="#422006"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M40.5 30c0 4.95 0 7.425-1.538 8.962C37.425 40.5 34.95 40.5 30 40.5s-7.425 0-8.962-1.538C19.5 37.425 19.5 34.95 19.5 30s0-7.425 1.538-8.962C22.575 19.5 25.05 19.5 30 19.5"
      stroke="#422006"
      strokeWidth={1.75}
      strokeLinecap="round"
    />
  </Svg>
)

export default WriteIconSvg
