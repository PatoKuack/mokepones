import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    x={0}
    y={0}
    enable-background: accumulate="true" 
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M23.2 4.5C16.7.1 5.6-.3 2.1 4 .4 6.1.2 9.8 2.1 11.4c2.8 2.4 8.1-1.2 12.8 1.6 2.4 1.5 3.3 3.8 3.5 4.3 1.7 4.9-3.3 8.2-1.6 11.1 1.4 2.5 7.2 3.6 10.3 1.8C33 26.8 33 11 23.2 4.5z" />
    <path d="M7 18.6c-2.8.9-6.3 4-5.4 7.5.8 3.1 4.7 4.9 7.1 4.1 3.9-1.4 4.5-9.8 1.8-11.6-1-.8-2.6-.2-3.5 0z" />
  </svg>
)
export default SvgComponent

/* https://www.youtube.com/watch?v=wVtV8l7FIi0 */
/* https://react-svgr.com/playground/ */