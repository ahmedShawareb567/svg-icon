import Sprites from "../sprites.svg";
import { FunctionComponent } from "react";

type SvgIconType = {
  name: string;
};

export const SvgIcon: FunctionComponent<SvgIconType> = ({ name, ...rest }) => {
  return (
    <span {...rest}>
      <svg className={`icon icon-${name}`} fill="currentColor">
        <use href={`${Sprites}#icon-${name}`} />
      </svg>
    </span>
  );
};
