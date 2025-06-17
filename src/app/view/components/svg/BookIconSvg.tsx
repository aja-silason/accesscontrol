import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const BookIconSvg = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      d="M2.25 13.486V9.53c0-2.725 0-4.088.824-4.934.824-.847 2.15-.847 4.801-.847 2.652 0 3.977 0 4.801.847.824.846.824 2.209.824 4.934v3.955c0 1.729 0 2.594-.543 2.903-1.053.6-3.027-1.4-3.964-2.002-.544-.35-.816-.524-1.118-.524-.302 0-.574.175-1.118.524-.937.602-2.911 2.602-3.964 2.002-.543-.31-.543-1.174-.543-2.903Z"
      stroke="#020100"
      strokeWidth={1.125}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.75 1.5h1.5c3.536 0 5.303 0 6.402 1.098C15.75 3.697 15.75 5.464 15.75 9v4.5"
      stroke="#020100"
      strokeWidth={1.125}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export {BookIconSvg}
