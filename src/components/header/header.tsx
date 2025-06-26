import s from './header.module.scss';
import type { ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return <header className={s.header}>{children}</header>;
};
