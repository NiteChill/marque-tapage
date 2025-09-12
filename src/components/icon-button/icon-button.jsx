import { Link } from 'react-router-dom';
import s from './icon-button.module.scss';

export const IconButton = ({
  children,
  to = false,
  onClick,
  theme,
  className,
  size,
  disabled = false,
  id,
}) => {
  let style = s.standard,
    wh = '3.2rem';
  if (size === 'large') wh = '3.6rem';
  if (size === 'extra-large') wh = '4rem';
  if (theme === 'secondary') style = s.secondary;
  const Content = () => (
    <div style={{ width: wh, height: wh }}>
      <div>{children}</div>
    </div>
  );

  if (to)
    return (
      <Link
        to={to}
        id={id}
        className={`${s.icon_button} ${style} ${
          disabled ? s.disabled : ''
        } ${className}`}
      >
        <Content />
      </Link>
    );
  else
    return (
      <button
        onClick={onClick}
        id={id}
        className={`${s.icon_button} ${style} ${
          disabled ? s.disabled : ''
        } ${className}`}
      >
        <Content />
      </button>
    );
};
