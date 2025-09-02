import s from './page.module.scss';
import { animated } from '@react-spring/web';

export const Page = ({ children, className, id, style, animate = false }) => {
  if (animate)
    return (
      <animated.main
        className={`${s.page} ${className || ''}`}
        id={id}
        style={style}
      >
        {children}
      </animated.main>
    );
  return (
    <main className={s.page + ' ' + className} id={id}>
      {children}
    </main>
  );
};
