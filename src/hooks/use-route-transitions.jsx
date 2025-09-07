import gsap from 'gsap';

export const useRouteTransitions = () => {
  const animatePage = (target, params) => {
      gsap.fromTo(
        target,
        {
          translateX: params[0],
        },
        {
          translateX: params[1],
          ease: 'power3.out',
          duration: 0.35,
        }
      );
    },
    animatePages = (pathname) => {
      let parent = pathname == '/' ? [-75, 0] : [0, -75],
        child = pathname == '/' ? [0, '100%'] : ['100%', 0];
      animatePage('#parent', parent);
      animatePage('#child', child)
    };
  return [animatePages];
};
