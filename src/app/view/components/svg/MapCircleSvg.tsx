import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const MapSvg = (props: SvgProps) => (
  <Svg
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      d="M18.333 8.833v-.652c0-1.616 0-2.424-.488-2.926-.488-.503-1.274-.503-2.845-.503h-1.732c-.765 0-.771-.001-1.459-.345l-2.776-1.39c-1.159-.58-1.739-.87-2.356-.85-.618.02-1.178.348-2.3 1.003l-1.022.597c-.824.48-1.236.721-1.462 1.121-.226.4-.226.887-.226 1.86v6.848c0 1.28 0 1.92.285 2.276.19.237.456.396.75.45.442.079.983-.237 2.065-.869.734-.429 1.441-.874 2.32-.753.737.1 1.421.565 2.08.895"
      stroke="#020100"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M6.667 2.167v12.5" stroke="#020100" strokeLinejoin="round" />
    <Path
      d="M12.5 4.667v3.75"
      stroke="#020100"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.257 18.57a.986.986 0 0 1-.673.263.985.985 0 0 1-.674-.263c-1.655-1.56-3.872-3.3-2.79-5.829.584-1.366 1.988-2.241 3.464-2.241s2.879.875 3.464 2.242c1.08 2.524-1.132 4.274-2.791 5.828Z"
      stroke="#020100"
    />
    <Path
      d="M14.583 14.25h.007"
      stroke="#020100"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default MapSvg
