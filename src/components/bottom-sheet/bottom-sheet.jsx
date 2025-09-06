import { animated } from '@react-spring/web';
import s from './bottom-sheet.module.scss';
import { useRef, useEffect, useContext, useState } from 'react';
import { IconButton } from '../icon-button/icon-button';
import { Close } from '../icons/icons';
import { BottomSheetContext } from '../../context/bottom-sheet-context';

export const BottomSheet = () => {
  const bottomSheetRef = useRef(null),
    [open, setOpen, progress, progressApi] = useContext(BottomSheetContext),
    [height, setHeight] = useState(window.visualViewport.height),
    updateHeight = () => setHeight(window.visualViewport.height);

  useEffect(() => {
    window.visualViewport.addEventListener('resize', updateHeight);
    return window.visualViewport.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    if (open.isOpen) {
      progressApi.start({ progress: 100 });
    } else {
      progressApi.start({ progress: 0 });
    }
  }, [open, progressApi]);
  return (
    <>
      <animated.div
        className={s.bottom_sheet}
        ref={bottomSheetRef}
        style={{
          paddingTop: open.hasHeader ? 0 : '2rem',
          transform: progress.to((val) => `translateY(${100 - val}%)`),
          // height: height - 28,
        }}
      >
        {open.hasHeader && (
          <header>
            <IconButton
              onClick={() => setOpen((prev) => ({ ...prev, isOpen: false }))}
            >
              <Close />
            </IconButton>
          </header>
        )}
        {open.content}
      </animated.div>
      <animated.div
        className={`${s.backdrop} ${open.isOpen ? s.visible : ''}`}
        style={{
          opacity: progress.to((val) => val / 100),
        }}
        onClick={() =>
          open.hasHeader && setOpen((prev) => ({ ...prev, isOpen: false }))
        }
      />
    </>
  );
};
