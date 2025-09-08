import { useEffect, useRef } from 'react';
import s from './text-button.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const TextButton = ({ children, active, onClick }) => {
  const txtRef = useRef(null),
    btnRef = useRef(null);
  useGSAP(() => {
    gsap.to(btnRef.current, {
      width: active ? txtRef.current.clientWidth + 24 : 'auto',
      ease: 'elastic(1.4,0.9)',
      duration: 0.5,
    });
  }, [active]);
  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className={`title-small ${s.text_button} ${active ? s.active : ''}`}
    >
      <div>
        <p style={{ opacity: active ? 0 : 1 }}>{children[0]}</p>
        <p ref={txtRef} style={{ opacity: active ? 1 : 0 }}>
          {children[1]}
        </p>
      </div>
    </button>
  );
};
