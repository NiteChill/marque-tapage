import gsap from 'gsap';

export const useRouteTransitions = () => {
  const animatePage = (target, params) => {
      gsap.fromTo(
        target,
        {
          translateX: params[0],
          position: params[1],
        },
        {
          translateX: params[2],
          ease: 'power3.out',
          duration: 0.35,
        }
      );
    },
    animatePages = (pathname) => {
      let parent = pathname == '/' ? [-75, 'static', 0] : [0, 'absolute', -75],
        child = pathname == '/' ? [0, 'absolute', '100%'] : ['100%', 'static', 0];
      animatePage('#parent', parent);
      animatePage('#child', child)
    };
  return [animatePages];
};
