import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.scss';
import {
	Navigate,
	Route,
	Routes,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { Home } from './pages/home/home';
import { BottomSheet } from './components/bottom-sheet/bottom-sheet';
import { useSpring } from '@react-spring/web';
import { useRouter } from './hooks/use-router';
import { WelcomeSheet } from './components/bottom-sheet/contents/welcome-sheet/welcome-sheet';
import { FavoritesSheet } from './components/bottom-sheet/contents/favorites-sheet/favorites-sheet';
import { NewsSheet } from './components/bottom-sheet/contents/news-sheet/news-sheet';
import { SearchSheet } from './components/bottom-sheet/contents/search-sheet/search-sheet';
import { ScheduleSheet } from './components/bottom-sheet/contents/schedule-sheet/schedule-sheet';

export default function App() {
	const location = useLocation();
	const navigate = useNavigate();
	const router = useRouter();
	const nodeRef = useRef(null);
	const [loc, setLoc] = useState(null);
	const [{ progress }, progressApi] = useSpring(() => ({
		progress: 0,
		config: {
			tension: 300,
			friction: 30,
		},
	}));
	useEffect(() => {
		router(location, setLoc);
	}, [location.pathname]);
	useEffect(() => {
		if (loc) progressApi.start({ progress: 100 });
		else progressApi.start({ progress: 0 });
	}, [loc]);
	useEffect(() => {
		localStorage.removeItem('marque-tapage-visited');
		const hasVisitedBefore = localStorage.getItem('marque-tapage-visited');
		if (!hasVisitedBefore && location.pathname == '/') navigate('/welcome');
	}, []);
	return (
		<>
			<Home progress={progress} />
			<TransitionGroup component={null}>
				<CSSTransition
					key={location.key}
					timeout={400}
					nodeRef={nodeRef}
				>
					<div
						ref={nodeRef}
						style={{
							display: 'contents',
						}}
					>
						<Routes location={location}>
							<Route
								path='/'
								element={null}
							/>
							<Route
								path='/welcome'
								element={
									<BottomSheet
										progress={progress}
										loc={loc}
										height='100vh'
										path='/welcome'
									>
										<WelcomeSheet />
									</BottomSheet>
								}
							/>
							<Route
								path='/favorites'
								element={
									<BottomSheet
										progress={progress}
										loc={loc}
										path='/favorites'
										title='Coups de coeur'
									>
										<FavoritesSheet />
									</BottomSheet>
								}
							/>
							<Route
								path='/news'
								element={
									<BottomSheet
										progress={progress}
										loc={loc}
										path='/news'
										title='Actualités'
									>
										<NewsSheet />
									</BottomSheet>
								}
							/>
							<Route
								path='/news/:id'
								element={
									<BottomSheet
										progress={progress}
										loc={loc}
										path='/news/:id'
										title='Actualités'
									>
										<NewsSheet />
									</BottomSheet>
								}
							/>
							<Route
								path='/search'
								element={
									<BottomSheet
										progress={progress}
										loc={loc}
										path='/search'
										title='Rechercher'
									>
										<SearchSheet />
									</BottomSheet>
								}
							/>
							<Route
								path='/schedule'
								element={
									<BottomSheet
										progress={progress}
										loc={loc}
										path='/schedule'
										title='Horaire'
									>
										<ScheduleSheet />
									</BottomSheet>
								}
							/>
							<Route
								path='/*'
								element={
									<Navigate
										to='/'
										replace
									/>
								}
							/>
						</Routes>
					</div>
				</CSSTransition>
			</TransitionGroup>
		</>
	);
}
