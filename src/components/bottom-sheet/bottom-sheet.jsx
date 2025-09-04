import { animated } from '@react-spring/web';
import s from './bottom-sheet.module.scss';
import { useRef, useEffect } from 'react';
import { IconButton } from '../icon-button/icon-button';
import { Close } from '../icons/icons';

export const BottomSheet = ({
  open = false,
  setOpen,
  progress,
  progressApi,
}) => {
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    if (open[0]) {
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
          paddingTop: open[2] ? 0 : '2rem',
          transform: progress.to((val) => {
            const translateY =
              window.innerHeight - (val / 100) * window.innerHeight;
            return `translateY(${translateY}px)`;
          }),
        }}
      >
        {open[2] && (
          <header>
            <IconButton onClick={() => setOpen([false, open[1], open[2]])}>
              <Close />
            </IconButton>
          </header>
        )}
        {open[1]}
      </animated.div>
      <animated.div
        className={`${s.backdrop} ${open[0] ? s.visible : ''}`}
        style={{
          opacity: progress.to((val) => val / 100),
        }}
        onClick={() => open[2] && setOpen([false, open[1], open[2]])}
      />
    </>
  );
};
