import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.scss';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { Home } from './pages/home/home';
import { BottomSheet } from './components/bottom-sheet/bottom-sheet';
import { useSpring } from '@react-spring/web';
import { useRouter } from './hooks/use-router';

export default function App() {
	const location = useLocation(),
    navigate = useNavigate(),
    router = useRouter(),
		nodeRef = useRef(null),
		[open, setOpen] = useState({
			isOpen: false,
			content: null,
			header: '',
			height: null,
		}),
		[{ progress }, progressApi] = useSpring(() => ({
			progress: 0,
			config: {
				tension: 300,
				friction: 30,
			},
		}));
  useEffect(() => {
    router(location, setOpen);
	}, [location.pathname]);
	useEffect(() => {
		if (open.isOpen) progressApi.start({ progress: 100 });
		else progressApi.start({ progress: 0 });
	}, [open]);
	useEffect(() => {
		localStorage.removeItem('marque-tapage-visited');
		const hasVisitedBefore = localStorage.getItem('marque-tapage-visited');
		if (!hasVisitedBefore && location.pathname == '/')
			navigate('/b/welcome');
	}, []);
	return (
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
							element={<Home progress={progress} />}
						>
							<Route
								path='/b/*'
								element={
									<BottomSheet
										progress={progress}
										open={open}
									/>
								}
							></Route>
						</Route>
					</Routes>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);
}
