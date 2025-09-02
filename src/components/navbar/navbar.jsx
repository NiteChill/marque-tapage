import s from './navbar.module.scss';

export const Navbar = ({children}) => {
  return (
    <nav className={s.navbar}>
      {children}
    </nav>
  )
}