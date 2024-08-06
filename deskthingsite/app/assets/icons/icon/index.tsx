import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  iconSize?: number;
  color?: string;
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
  className?: string;
  fill?: string;
  children?: React.ReactNode;
}

export const Icon = ({
  iconSize = 24,
  color = "currentColor",
  title,
  titleId,
  desc,
  fill,
  descId,
  className,
  width = iconSize,
  height = iconSize,
  children,
  ...restProps
}: IconProps): JSX.Element => {
  return (
    <svg
      color={color}
      role="img"
      height={height}
      fill={fill}
      width={width}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      {...restProps}
    >
      {title && <title id={titleId}>{title}</title>}
      {desc && <desc id={descId}>{desc}</desc>}
      {children}
    </svg>
  );
};
