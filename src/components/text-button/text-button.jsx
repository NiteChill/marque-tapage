import { useEffect, useRef } from 'react';
import s from './text-button.module.scss';
import { animated, useSpring } from '@react-spring/web';

export const TextButton = ({ children, active, onClick }) => {
	const txtRef1 = useRef(null),
		txtRef2 = useRef(null),
		[widthSpring, widthApi] = useSpring(() => ({
			config: {
				tension: 290,
				friction: 17,
			},
		}));
	useEffect(() => {
		widthApi.start({
			to: {
				width: active ? txtRef2.current.clientWidth + 24 : txtRef1.current.clientWidth + 24,
			},
		});
	}, [active]);
	return (
		<animated.button
			onClick={onClick}
			style={widthSpring}
			className={`title-small ${s.text_button} ${active ? s.active : ''}`}
		>
			<div>
				<p
					ref={txtRef1}
					style={{ opacity: active ? 0 : 1 }}
				>
					{children[0]}
				</p>
				<p
					ref={txtRef2}
					style={{ opacity: active ? 1 : 0 }}
				>
					{children[1]}
				</p>
			</div>
		</animated.button>
	);
};
