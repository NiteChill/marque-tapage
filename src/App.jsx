import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.scss';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { useRef, useState, useEffect } from 'react';
import { useRouteTransitions } from './hooks/use-route-transitions';
import Cookies from 'js-cookie';
import { FavoritesArticle } from './pages/favorites-article/favorites-article';
import { Home } from './pages/home/home';
import { NewsArticle } from './pages/news-article/news-article';
import { BottomSheet } from './components/bottom-sheet/bottom-sheet';
import { WelcomeSheet } from './components/bottom-sheet/contents/welcome-sheet/welcome-sheet';
import { useSpring } from '@react-spring/web';
import { BottomSheetContext } from './context/bottom-sheet-context';

export default function App() {
  const location = useLocation(),
    nodeRef = useRef(null),
    [animatePages] = useRouteTransitions(),
    [firstLoad, setFirstLoad] = useState(true);
  useGSAP(() => {
    firstLoad && setFirstLoad(false);
    !firstLoad && animatePages(location.pathname);
  }, [location]);
  const [bottomSheet, setBottomSheet] = useState({
    isOpen: false,
    content: '',
    hasHeader: true,
  });
  const [{ progress }, progressApi] = useSpring(() => ({
    progress: 0,
    config: {
      tension: 300,
      friction: 30,
    },
  }));

  useEffect(() => {
    // Cookies.remove('marque-tapage-visited');
    const hasVisitedBefore = Cookies.get('marque-tapage-visited');
    if (!hasVisitedBefore)
      setBottomSheet({
        isOpen: true,
        content: <WelcomeSheet />,
        hasHeader: false,
      });
  }, []);
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} timeout={350} nodeRef={nodeRef}>
        <div
          ref={nodeRef}
          style={{
            display: 'contents',
          }}
        >
          <BottomSheetContext
            value={[bottomSheet, setBottomSheet, progress, progressApi]}
          >
            <Routes location={location}>
              <Route path='/' element={<Home />} />
              <Route
                path='/favorites/:article'
                element={<FavoritesArticle />}
              />
              <Route path='/news/:article' element={<NewsArticle />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
            <BottomSheet />
          </BottomSheetContext>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
