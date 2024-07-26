interface HexagoneIconProps {
    height?: number
    width?: number;
    className?: string;
    fill?: string;
}

const HexagoneIcon = (props: HexagoneIconProps) => {
    const { width = 35, height = 35, className, fill = "#ff2f04 " } = props;
    return (
        <svg
            className={className}
            fill={fill}
            height={height}
            width={width}
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 184.751 184.751"
            xmlSpace="preserve"
            {...props}
        >
            <path d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z" />
        </svg>
    );
}
export default HexagoneIcon;
