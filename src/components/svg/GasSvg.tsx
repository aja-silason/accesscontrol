import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

const GasSvg = (props: SvgProps) => (
  <Svg
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Circle cx={24} cy={24} r={24} fill="#FFDF66" />
    <Path
      d="M22.206 25.167 20.58 27.28a.386.386 0 0 0 .235.613l1.703.362a.386.386 0 0 1 .207.645L20.707 31M14.667 21.667h14"
      stroke="#020100"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.667 34.5v-14c0-3.3 0-4.95 1.025-5.975 1.025-1.025 2.675-1.025 5.975-1.025s4.95 0 5.974 1.025c1.026 1.025 1.026 2.675 1.026 5.975v14h-14Z"
      stroke="#020100"
      strokeWidth={1.75}
    />
    <Path
      d="M12.333 34.5H31M28.667 26.333h1.944c.362 0 .543 0 .69.04.404.108.718.422.826.825.04.148.04.33.04.69v1.362a1.75 1.75 0 0 0 3.5 0v-7.337c0-.701 0-1.052-.1-1.383-.1-.33-.295-.622-.684-1.206l-.903-1.353A2.18 2.18 0 0 0 32.167 17"
      stroke="#020100"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default GasSvg
