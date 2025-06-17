import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const LicenseSvg = (props: SvgProps) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      d="M11.958 8.167V5.833c0-2.2 0-3.3-.683-3.983-.684-.683-1.783-.683-3.983-.683h-.584c-2.2 0-3.3 0-3.983.683-.683.683-.683 1.783-.683 3.983v2.334c0 2.2 0 3.3.683 3.983.683.683 1.783.683 3.983.683h.584c2.2 0 3.3 0 3.983-.683.683-.684.683-1.784.683-3.983ZM4.667 4.083h4.666M4.667 7h4.666M4.667 9.917H7"
      stroke="#020100"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default LicenseSvg
