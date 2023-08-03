import { ReactElement, MouseEvent } from 'react';
import ReflejoLuz from '../assets/ComponentsSVG/ReflejoLuz';
import LogoMP from '../assets/ComponentsSVG/LogoMP';

type IconType = "reflejo" | "logo";

interface IconProps {
  // Para el svg
  type: IconType;
  fill?: string;
  classSVG?: string;
  // Para el contenedor (span)
  classContainer?: string;
  onClick?: (event: MouseEvent<HTMLSpanElement>) => void;
}

const iconTypes: { [key in IconType]: (color: string, classes: string) => ReactElement } = {
  "reflejo": (color, classes) => (
    <ReflejoLuz className={`icon ${classes}`} fill={color} />
  ),
  "logo": (color, classes) => (
    <LogoMP className={`icon ${classes}`} fill={color} />
  ),
}

function CreateIcon({ 
  type, 
  fill = "transparent", 
  classSVG = "",
  classContainer, 
  onClick 
}: IconProps): ReactElement {
  return (
    <span
      className={`icon-container__${type} ${classContainer}`}
      onClick={onClick}
    >
      {iconTypes[type](fill, classSVG)}
    </span>
  );
}

export { CreateIcon }
