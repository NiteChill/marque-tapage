import { animated } from '@react-spring/web';
import s from './bottom-sheet.module.scss';
import { use, useEffect, useRef } from 'react';
import { IconButton } from '../icon-button/icon-button';
import { Close } from '../icons/icons';
import { Outlet, useNavigate } from 'react-router-dom';

export const BottomSheet = ({ progress, loc, path, title, height = 'auto', children }) => {
	const bottomSheetRef = useRef(null),
		navigate = useNavigate();
	return (
		<>
			<animated.div
				className={s.bottom_sheet}
				ref={bottomSheetRef}
				style={{
					transform: progress.to((val) => `translateY(${100 - val}%)`),
					height: height,
				}}
			>
				{title && (
					<header>
						<h2 className='headline-small'>{title}</h2>
						<IconButton
							className={s.close_button}
							size='extra-large'
							to='/'
						>
							<Close />
						</IconButton>
					</header>
				)}
				{/* {open.content} */}
				{/* <Outlet	 /> */}
				{children}
			</animated.div>
			<animated.div
				className={`${s.backdrop} ${
					loc === path ? s.visible : ''
				}`}
				style={{
					opacity: progress.to((val) => val / 100),
				}}
				onClick={() => loc === path && title && navigate('/')}
			/>
		</>
	);
};
