import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.scss';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { useRouteTransitions } from './hooks/use-route-transitions';
import { FavoritesArticle } from './pages/favorites-article/favorites-article';
import { Home } from './pages/home/home';
import { NewsArticle } from './pages/news-article/news-article';
import { BottomSheet } from './components/bottom-sheet/bottom-sheet';
import { useSpring } from '@react-spring/web';

export default function App() {
  const location = useLocation(),
    nodeRef = useRef(null),
    [animatePages] = useRouteTransitions(),
    [firstLoad, setFirstLoad] = useState(true);
  useGSAP(() => {
    firstLoad && setFirstLoad(false);
    !firstLoad && animatePages(location.pathname);
  }, [location]);
  const [bottomSheet, setBottomSheet] = useState([
    false,
    '',
  ]);
  const [{ z }, homeApi] = useSpring(() => ({
    z: 0,
    config: {
      tension: 300,
      friction: 30,
    },
  }));
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} timeout={350} nodeRef={nodeRef}>
        <div
          ref={nodeRef}
          style={{
            display: 'contents',
          }}
        >
          <Routes location={location}>
            <Route path='/' element={<Home setBottomSheet={setBottomSheet} z={z} />} />
            <Route path='/favorites/:article' element={<FavoritesArticle />} />
            <Route path='/news/:article' element={<NewsArticle />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          <BottomSheet
            open={bottomSheet}
            setOpen={setBottomSheet}
            homeApi={homeApi}
          ></BottomSheet>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
