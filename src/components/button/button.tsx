import { NavLink } from 'react-router-dom';
import s from './button.module.scss';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  color?: 'pink' | 'green' | 'blue';
  to?: string;
};

export const Button = ({ children, color, to }: ButtonProps) => {
  let finalColor = s.default;
  if (color === 'pink') finalColor = s.pink;
  if (color === 'green') finalColor = s.green;
  if (color === 'blue') finalColor = s.blue;
  if (to)
    return (
      <NavLink to={to} className={`${s.button} ${finalColor}`}>
        {children}
      </NavLink>
    );
  return <button className={`${s.button} ${finalColor}`}>{children}</button>;
};
