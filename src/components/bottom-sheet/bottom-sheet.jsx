import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import s from './bottom-sheet.module.scss';
import { useRef, useEffect } from 'react';
import { IconButton } from '../icon-button/icon-button';
import { Close } from '../icons/icons';

export const BottomSheet = ({ open = false, setOpen, homeApi }) => {
  const bottomSheetRef = useRef(null),
    [{ y }, api] = useSpring(() => ({
      y: window.innerHeight,
      config: { mass: 1, tension: 280, friction: 32 },
    })),
    [backdropSprings, backdropApi] = useSpring(() => ({
      opacity: 0,
      config: {
        tension: 300,
        friction: 30,
      },
    })),
    bind = useDrag(
      ({
        last,
        movement: [, my],
        velocity: [, vy],
        direction: [, dy],
        memo,
      }) => {
        if (memo === undefined) {
          memo = y.get();
        }

        const newY = memo + my;
        const threshold = bottomSheetRef.current.clientHeight / 2;

        if (last) {
          const shouldClose = newY > threshold || (vy > 0.1 && dy > 0);
          api.start({
            y: shouldClose ? window.innerHeight : 0,
            immediate: false,
          });
          backdropApi.start({
            opacity: shouldClose ? 0 : 1,
          });
          homeApi.start({
            z: shouldClose ? 0 : -5,
          });
          if (shouldClose && open[0]) {
            setOpen([false, open[1]]);
          }
        } else {
          api.start({ y: Math.max(0, newY), immediate: true });
          backdropApi.start({
            opacity: 1 - newY / bottomSheetRef.current.clientHeight,
          });
          homeApi.start({
            z: -5 + (newY / bottomSheetRef.current.clientHeight) * 5,
          });
        }

        return memo;
      },
      {
        from: () => [0, y.get()],
        bounds: { top: 0, bottom: window.innerHeight },
      }
    );

  useEffect(() => {
    if (open[0]) {
      api.start({ y: 0 });
      backdropApi.start({ opacity: 1 });
      homeApi.start({ z: -5 });
    } else {
      api.start({ y: window.innerHeight });
      backdropApi.start({ opacity: 0 });
      homeApi.start({ z: 0 });
    }
  }, [open, api, backdropApi, homeApi]);

  return (
    <>
      <animated.div
        {...bind()}
        className={s.bottom_sheet}
        ref={bottomSheetRef}
        style={{
          transform: y.to((val) => `translateY(${val}px)`),
        }}
      >
        <header>
          <IconButton onClick={() => setOpen([false, open[1]])}>
            <Close />
          </IconButton>
        </header>
        {open[1]}
      </animated.div>
      <animated.div
        className={`${s.backdrop} ${open[0] ? s.visible : ''}`}
        style={backdropSprings}
        onClick={() => setOpen([false, open[1]])}
      />
    </>
  );
};
