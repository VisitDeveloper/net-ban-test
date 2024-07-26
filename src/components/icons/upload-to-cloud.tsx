 
 interface UploadToCloudProps {
    height?: number
    width?: number;
    className?: string;
 }

const UploadToCloud = (props: UploadToCloudProps) => {
    const { width = 45, height = 45 , className } = props;
    return (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 296 295"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect
      x={0.283936}
      y={0.71875}
      width={295.385}
      height={293.417}
      fill="url(#pattern0_0_103)"
    />
    <defs>
      <pattern
        id="pattern0_0_103"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_0_103"
          transform="matrix(0.00993336 0 0 0.01 0.00333215 0)"
        />
      </pattern>
      <image
        id="image0_0_103"
        width={100}
        height={100}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
}
export default UploadToCloud;
