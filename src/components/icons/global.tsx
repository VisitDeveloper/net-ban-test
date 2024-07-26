
interface GlobalComponentIconProps {
    width?: number; 
    height?: number ;
}

const GlobalComponentIcon = (props: GlobalComponentIconProps) => {
    const { width = 45, height = 45 } = props;
    return (
  <svg
    width={width}
    height={height}
    viewBox="0 0 201 199"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect
      x={0.138916}
      y={0.508301}
      width={199.64}
      height={198.309}
      transform="rotate(-0.0945764 0.138916 0.508301)"
      fill="url(#pattern0_0_97)"
    />
    <defs>
      <pattern
        id="pattern0_0_97"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_0_97"
          transform="matrix(0.00993336 0 0 0.01 0.00333212 0)"
        />
      </pattern>
      <image
        id="image0_0_97"
        width={100}
        height={100}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
}
export default GlobalComponentIcon;