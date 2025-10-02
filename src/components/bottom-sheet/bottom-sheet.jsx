import { animated } from '@react-spring/web';
import s from './bottom-sheet.module.scss';
import { useRef } from 'react';
import { IconButton } from '../icon-button/icon-button';
import { Close } from '../icons/icons';
import { useNavigate } from 'react-router-dom';

export const BottomSheet = ({ progress, open }) => {
  const bottomSheetRef = useRef(null),
    navigate = useNavigate();
	return (
		<>
			<animated.div
				className={s.bottom_sheet}
				ref={bottomSheetRef}
				style={{
					transform: progress.to((val) => `translateY(${100 - val}%)`),
					height: open.height ? open.height : 'auto',
				}}
			>
				{open.header && (
					<header>
						<h2 className='headline-small'>{open.header}</h2>
						<IconButton
							className={s.close_button}
							size='extra-large'
							to='/'
						>
							<Close />
						</IconButton>
					</header>
				)}
				{open.content}
				{/* <Outlet /> */}
			</animated.div>
			<animated.div
				className={`${s.backdrop} ${
					open.isOpen ? s.visible : ''
				}`}
				style={{
					opacity: progress.to((val) => val / 100),
				}}
				onClick={() => open.isOpen && open.header && navigate('/')}
			/>
		</>
	);
};
