import { Link } from 'react-router-dom';
import s from './icon-button.module.scss';
import { animated } from '@react-spring/web';

export const IconButton = ({
	children,
	to = false,
	onClick,
	theme,
	className,
	size,
	disabled = false,
	id,
  animateButton = false,
  style
}) => {
	let buttonTheme = s.standard,
		wh = '3.2rem';
	if (size === 'large') wh = '3.6rem';
	if (size === 'extra-large') wh = '4rem';
	if (theme === 'secondary') buttonTheme = s.secondary;
	const Content = () => (
		<div style={{ width: wh, height: wh }}>
			<div>{children}</div>
		</div>
	);

	if (to)
		return (
			<Link
				to={to}
				id={id}
        style={style}
				className={`${s.icon_button} ${buttonTheme} ${
					disabled ? s.disabled : ''
				} ${className}`}
			>
				<Content />
			</Link>
		);
	if (animateButton)
		return (
			<animated.button
				onClick={onClick}
				id={id}
        style={style}
				className={`${s.icon_button} ${buttonTheme} ${
					disabled ? s.disabled : ''
				} ${className}`}
			>
				<Content />
			</animated.button>
		);
	return (
		<button
			onClick={onClick}
			id={id}
      style={style}
			className={`${s.icon_button} ${buttonTheme} ${
				disabled ? s.disabled : ''
			} ${className}`}
		>
			<Content />
		</button>
	);
};
