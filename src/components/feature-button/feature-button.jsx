import { NavLink } from 'react-router-dom';
import s from './feature-button.module.scss';

export const FeatureButton = ({ children, to, theme }) => {
	let style = s.standard;
	switch (theme) {
		case 'primary':
			style = s.primary;
			break;
		case 'secondary':
			style = s.secondary;
			break;
		case 'tertiary':
			style = s.tertiary;
			break;
	}
	return (
		// <button onClick={onClick} className={s.feature_button + ' ' + style}>
		//   <div>{children}</div>
		// </button>
    <NavLink
      to={to}
			// onClick={onClick}
			className={s.feature_button + ' ' + style}
		>
			<div>{children}</div>
		</NavLink>
	);
};
