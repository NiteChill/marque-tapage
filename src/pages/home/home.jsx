import { Page } from '../../components/page/page';
import s from './home.module.scss';
import { useContext } from 'react';
import { BottomSheetContext } from '../../context/bottom-sheet-context';
import { Card } from '../../components/card/card';
import brandIllustration from '../../assets/img/brand-illustration.svg';
import { Hero } from '../../components/hero/hero';
import { NewsSheet } from '../../components/bottom-sheet/contents/news-sheet/news-sheet';
import { FavoritesSheet } from '../../components/bottom-sheet/contents/favorites-sheet/favorites-sheet';
import { CarouselSection } from '../../components/caroussel-sections/carousel-section';
import { dummyFavorites, dummyNews } from '../../data/dummy-cards';

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
			<Hero />
			<Card
				className={s.brand_card}
				src={brandIllustration}
			>
				<h6 className={`headline-small ${s.title}`}>
					Marque Tapage c’est quoi?
				</h6>
				<p className={`body-large ${s.text}`}>
					Marque Tapage est une librairie indépendante qui se concentre sur le
					conseil et le rapport humain. Korem ipsum dolor sit amet, consectetur
					adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
					tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
					sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
					condimentum velit, sit amet feugiat lectus.
				</p>
			</Card>
			<CarouselSection
				title='Actualités'
				seeAllHandler={() =>
					setOpen({
						isOpen: true,
						content: <NewsSheet />,
						header: 'Actualité',
					})
				}
				array={dummyNews}
			/>
			<CarouselSection
				title='Coups de coeur'
				seeAllHandler={() =>
					setOpen({
						isOpen: true,
						content: <FavoritesSheet />,
						header: 'Coups de coeur',
					})
				}
				array={dummyFavorites}
			/>
		</Page>
	);
};
