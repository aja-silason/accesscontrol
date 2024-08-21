import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"

const HeaderSvg = (props: SvgProps) => (
  <Svg
    width="100%"
    height="100%"
    fill="none"
    {...props}
    className="w-[1000px]"
  >
    <G clipPath="url(#a)" filter="url(#b)">
      <Path fill="url(#c)" d="M0 0h393v119H0z" />
      <Circle
        cx={41.412}
        cy={68.95}
        r={49.5}
        transform="rotate(53.5 41.412 68.95)"
        stroke="url(#d)"
        strokeOpacity={0.3}
      />
      <Circle
        cx={41.412}
        cy={68.95}
        r={74.5}
        transform="rotate(53.5 41.412 68.95)"
        stroke="url(#e)"
        strokeOpacity={0.3}
      />
      <Circle
        cx={41.412}
        cy={68.95}
        r={99.5}
        transform="rotate(53.5 41.412 68.95)"
        stroke="url(#f)"
        strokeOpacity={0.3}
      />
      <Circle
        cx={41.412}
        cy={68.95}
        r={124.5}
        transform="rotate(53.5 41.412 68.95)"
        stroke="url(#g)"
        strokeOpacity={0.3}
      />
      <Circle
        cx={39.802}
        cy={70.802}
        r={149.5}
        transform="rotate(53.5 39.802 70.802)"
        stroke="url(#h)"
        strokeOpacity={0.3}
      />
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={0}
        y1={0}
        x2={390}
        y2={116.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E9B309" />
        <Stop offset={1} stopColor="#C98B05" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={41.412}
        y1={18.95}
        x2={41.412}
        y2={118.95}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={41.412}
        y1={-6.05}
        x2={41.412}
        y2={143.95}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={41.412}
        y1={-31.05}
        x2={41.412}
        y2={168.95}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={41.412}
        y1={-56.05}
        x2={41.412}
        y2={193.95}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={39.802}
        y1={-79.198}
        x2={39.802}
        y2={220.802}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h393v119H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default HeaderSvg
