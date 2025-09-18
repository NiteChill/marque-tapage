import s from './card.module.scss';

export const Card = ({ children, src, className }) => {
	return (
		<div className={`${s.card} ${className}`}>
			<img
				src={src}
				alt='Card illustration'
			/>
			<div className={s.content}>{children}</div>
		</div>
	);
};