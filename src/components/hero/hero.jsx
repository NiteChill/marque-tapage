import { FeatureButton } from '../feature-button/feature-button';
import arch from '../../assets/img/arch.svg';
import drops from '../../assets/img/drops.svg';
import eye from '../../assets/img/eye.svg';
import waterfall from '../../assets/img/waterfall.svg';
import {
	BrandAwareness,
	Favorite,
	Schedule,
	Search,
} from '../icons/icons';
import s from './hero.module.scss';

export const Hero = () => {
	// const [, setOpen] = useContext(BottomSheetContext);
	return (
		<section className={s.hero}>
			<div className={s.shapes}>
				<img
					src={arch}
					alt='arch'
				/>
				<img
					src={waterfall}
					alt='arch'
				/>
				<img
					src={eye}
					alt='arch'
				/>
				<img
					src={drops}
					alt='arch'
				/>
			</div>
			<h1 className='display-small'>Marque Tapage</h1>
			<nav className={s.features_container}>
				<FeatureButton
					theme='primary'
					to='/favorites'
					// onClick={() =>
					// 	setOpen({
					// 		isOpen: true,
					// 		content: <FavoritesSheet />,
					// 		header: 'Coups de coeur',
					// 	})
					// }
				>
					<Favorite />
				</FeatureButton>
				<FeatureButton
					theme='tertiary'
					to='/news'
					// onClick={() =>
					// 	setOpen({
					// 		isOpen: true,
					// 		content: <NewsSheet />,
					// 		header: 'Actualité',
					// 	})
					// }
				>
					<BrandAwareness />
				</FeatureButton>
				<FeatureButton
					theme='secondary'
					to='/search'
					// onClick={() =>
					// 	setOpen({
					// 		isOpen: true,
					// 		content: <SearchSheet />,
					// 		header: 'Rechercher',
					// 	})
					// }
				>
					<Search />
				</FeatureButton>
				<FeatureButton
					to='/schedule'
					// onClick={() =>
					// 	setOpen({
					// 		isOpen: true,
					// 		content: <ScheduleSheet />,
					// 		header: 'Horaire',
					// 	})
					// }
				>
					<Schedule />
				</FeatureButton>
			</nav>
		</section>
	);
};
