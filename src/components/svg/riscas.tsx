import * as React from "react"
import Svg, {
  SvgProps,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"

const RiscasSvg = (props: SvgProps) => (
  <Svg
    width={250}
    height={119}
    fill="none"
    {...props}
  >
    <Circle
      cx={41.412}
      cy={68.95}
      r={49.5}
      transform="rotate(53.5 41.412 68.95)"
      stroke="url(#a)"
      strokeOpacity={0.3}
    />
    <Circle
      cx={41.412}
      cy={68.95}
      r={74.5}
      transform="rotate(53.5 41.412 68.95)"
      stroke="url(#b)"
      strokeOpacity={0.3}
    />
    <Circle
      cx={41.412}
      cy={68.95}
      r={99.5}
      transform="rotate(53.5 41.412 68.95)"
      stroke="url(#c)"
      strokeOpacity={0.3}
    />
    <Circle
      cx={41.412}
      cy={68.95}
      r={124.5}
      transform="rotate(53.5 41.412 68.95)"
      stroke="url(#d)"
      strokeOpacity={0.3}
    />
    <Circle
      cx={39.802}
      cy={70.802}
      r={149.5}
      transform="rotate(53.5 39.802 70.802)"
      stroke="url(#e)"
      strokeOpacity={0.3}
    />
    <Defs>
      <LinearGradient
        id="a"
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
        id="b"
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
        id="c"
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
        id="d"
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
        id="e"
        x1={39.802}
        y1={-79.198}
        x2={39.802}
        y2={220.802}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default RiscasSvg
