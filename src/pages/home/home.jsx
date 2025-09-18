import { Link } from 'react-router-dom';
import { Page } from '../../components/page/page';
import s from './home.module.scss';
import arch from '../../assets/img/arch.svg';
import drops from '../../assets/img/drops.svg';
import eye from '../../assets/img/eye.svg';
import waterfall from '../../assets/img/waterfall.svg';
import { FeatureButton } from '../../components/feature-button/feature-button';
import {
  BrandAwareness,
  Favorite,
  Schedule,
  Search,
} from '../../components/icons/icons';
import { FavoritesSheet } from '../../components/bottom-sheet/contents/favorites-sheet/favorites-sheet';
import { NewsSheet } from '../../components/bottom-sheet/contents/news-sheet/news-sheet';
import { SearchSheet } from '../../components/bottom-sheet/contents/search-sheet/search-sheet';
import { ScheduleSheet } from '../../components/bottom-sheet/contents/schedule-sheet/schedule-sheet';
import { useContext } from 'react';
import { BottomSheetContext } from '../../context/bottom-sheet-context';
import { Card } from '../../components/card/card';
import brandIllustration from '../../assets/img/brand-illustration.svg';

export const Home = () => {
  const [, setOpen, progress] = useContext(BottomSheetContext);
  return (
		<Page
			className={s.home}
			id='parent'
			style={{
				transform: progress.to((val) => {
					// recreating the perspective effect with scale because translateZ has a rendering issue where border-radius doesn't clip correctly when 3D transformed if overflow isn't hidden.
					const perspective = 100,
						translateZ = -val / 20, // goes from 0 when val = 0 to -5 when val = 100
						scale = perspective / (perspective - translateZ);
					return `translateY(${(val / 100) * 16}px) scale(${scale})`;
				}),
				borderRadius: progress.to((val) => `${(val / 100) * 3.2}rem`),
				background: progress.to((val) => {
					const pV = val / 100,
						c1 = [254, 255, 255], // #FEFFFF (surface-0)
						c2 = [246, 247, 249]; // #F6F7F9 (surface-2)
					return `rgb(${Math.round(c1[0] + (c2[0] - c1[0]) * pV)}, ${Math.round(
						c1[1] + (c2[1] - c1[1]) * pV
					)}, ${Math.round(c1[2] + (c2[2] - c1[2]) * pV)})`;
				}),
			}}
			animate
		>
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
			<Card className={s.brand_card} src={brandIllustration}>
				<h6 className={`headline-small ${s.title}`}>Marque Tapage c’est quoi?</h6>
				<p className={`body-large ${s.text}`}>
					Marque Tapage est une librairie indépendante qui se concentre sur le
					conseil et le rapport humain. Korem ipsum dolor sit amet, consectetur
					adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
					tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
					sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
					condimentum velit, sit amet feugiat lectus.
				</p>
			</Card>
			<Link to='/favorites/A_favorites_article'>
				This is a favorites-article...
			</Link>
			<Link to='/news/A_news_article'>This is a news-article...</Link>
			<div style={{ minHeight: '200vh' }}></div>
		</Page>
	);
};
