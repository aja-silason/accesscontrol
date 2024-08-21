import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const DistribuitorSvgIcon = (props: SvgProps) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      d="M20.167 11a9.167 9.167 0 1 0-18.334 0 9.167 9.167 0 0 0 18.334 0Z"
      stroke="#fff"
      strokeWidth={1.375}
    />
    <Path
      d="m11.368 7.606 2.676-.892c.813-.27 1.22-.406 1.434-.192.214.215.079.621-.192 1.433l-.893 2.677c-.46 1.384-.692 2.077-1.188 2.573s-1.189.727-2.573 1.188l-2.676.893c-.813.27-1.22.406-1.433.191-.215-.214-.08-.62.191-1.433l.892-2.676c.462-1.384.693-2.077 1.189-2.573.496-.496 1.189-.727 2.573-1.189Z"
      stroke="#fff"
      strokeWidth={1.375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m11 11-.006.006"
      stroke="#fff"
      strokeWidth={1.833}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default DistribuitorSvgIcon


const DistribuitorSvgIconBlack = (props: SvgProps) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      d="M20.167 11a9.167 9.167 0 1 0-18.334 0 9.167 9.167 0 0 0 18.334 0Z"
      stroke="#020100"
      strokeWidth={1.375}
    />
    <Path
      d="m11.368 7.606 2.676-.892c.813-.27 1.22-.406 1.433-.192.215.215.08.621-.191 1.433l-.893 2.677c-.461 1.384-.692 2.077-1.188 2.573s-1.189.727-2.573 1.188l-2.677.893c-.812.27-1.218.406-1.433.191-.214-.214-.079-.62.192-1.433l.892-2.676c.462-1.384.693-2.077 1.189-2.573.496-.496 1.189-.727 2.573-1.189Z"
      stroke="#020100"
      strokeWidth={1.375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m11 11-.006.006"
      stroke="#020100"
      strokeWidth={1.833}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export {DistribuitorSvgIconBlack}
