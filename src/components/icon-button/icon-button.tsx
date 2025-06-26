import { NavLink } from 'react-router-dom';
import s from './icon-button.module.scss';

type IconButtonProps = {
  children: string;
  alt: string;
  to?: string;
};

export const IconButton = ({ children, alt, to }: IconButtonProps) => {
  if (to) return (
    <NavLink to={to} className={s.icon_button}>
      <img src={children} alt={alt} />
    </NavLink>
  );
  return (
    <button className={s.icon_button}>
      <img src={children} alt={alt} />
    </button>
  );
};
