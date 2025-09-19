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
import { FavoritesSheet } from '../bottom-sheet/contents/favorites-sheet/favorites-sheet';
import { NewsSheet } from '../bottom-sheet/contents/news-sheet/news-sheet';
import { SearchSheet } from '../bottom-sheet/contents/search-sheet/search-sheet';
import { ScheduleSheet } from '../bottom-sheet/contents/schedule-sheet/schedule-sheet';
import { BottomSheetContext } from '../../context/bottom-sheet-context';
import { useContext } from 'react';
import s from './hero.module.scss';

export const Hero = () => {
	const [, setOpen] = useContext(BottomSheetContext);
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
					onClick={() =>
						setOpen({
							isOpen: true,
							content: <FavoritesSheet />,
							header: 'Coups de coeur',
						})
					}
				>
					<Favorite />
				</FeatureButton>
				<FeatureButton
					theme='tertiary'
					onClick={() =>
						setOpen({
							isOpen: true,
							content: <NewsSheet />,
							header: 'Actualité',
						})
					}
				>
					<BrandAwareness />
				</FeatureButton>
				<FeatureButton
					theme='secondary'
					onClick={() =>
						setOpen({
							isOpen: true,
							content: <SearchSheet />,
							header: 'Rechercher',
						})
					}
				>
					<Search />
				</FeatureButton>
				<FeatureButton
					onClick={() =>
						setOpen({
							isOpen: true,
							content: <ScheduleSheet />,
							header: 'Horaire',
						})
					}
				>
					<Schedule />
				</FeatureButton>
			</nav>
		</section>
	);
};
