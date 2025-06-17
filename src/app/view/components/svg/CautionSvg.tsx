import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const CautionSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      d="M5.322 9.683c2.413-4.271 3.62-6.407 5.276-6.956a4.445 4.445 0 0 1 2.804 0c1.656.55 2.863 2.685 5.276 6.956 2.414 4.27 3.62 6.406 3.259 8.146-.2.958-.69 1.826-1.402 2.48C19.241 21.5 16.827 21.5 12 21.5s-7.241 0-8.535-1.19a4.658 4.658 0 0 1-1.402-2.48c-.362-1.74.845-3.876 3.259-8.147Z"
      stroke="#020100"
      strokeWidth={1.5}
    />
    <Path
      d="M11.992 16H12"
      stroke="#020100"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 13V9"
      stroke="#020100"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CautionSvg
