import { Link } from 'react-router-dom';
import s from './card.module.scss';

export const Card = ({ children, src, className, to = false }) => {
	if (to)
		return (
			<Link
				className={`${s.card} ${className}`}
				to={to}
			>
				<Content src={src}>{children}</Content>
			</Link>
		);
	return (
		<div className={`${s.card} ${className}`}>
			<Content src={src}>{children}</Content>
		</div>
	);
};

const Content = ({ src, children }) => {
	return (
		<>
			<img
				src={src}
				alt='Card illustration'
			/>
			<div className={s.content}>{children}</div>
		</>
	);
};
