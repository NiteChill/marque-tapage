import { Card } from '../card/card';
import { IconButton } from '../icon-button/icon-button';
import { ChevronRight, Star } from '../icons/icons';
import s from './carousel-section.module.scss';

export const CarouselSection = ({ title, seeAllHandler, array }) => {
	return (
		<section className={s.carousel_section}>
			<header>
				<h2 className='headline-small'>{title}</h2>
				<IconButton
					className={s.close_button}
					onClick={seeAllHandler}
				>
					<ChevronRight />
				</IconButton>
			</header>
			<div>
				{array.map((item) =>
					title === 'Actualités' ? (
						<Card
							src={item.src}
							key={item.id}
							className={s.news_card}
							to={`/news/${item.id}`}
						>
							<h6 className='headline-small'>{item.title}</h6>
							<p className='label-large'>
								{new Date(item.creationDate).toLocaleDateString('fr-FR', {
									day: 'numeric',
									month: 'long',
									year: 'numeric',
								})}{' '}
								• {item.categories.join(', ')}
							</p>
						</Card>
					) : (
						<Card
							src={item.src}
							key={item.id}
							className={s.favorites_card}
							to
						>
							<h6 className='title-medium'>{item.title}</h6>
							<p className='label-large'>
								{item.rating} <Star className={s.star} />•{' '}
								<span>{item.categories.join(', ')}</span>
							</p>
						</Card>
					)
				)}
			</div>
		</section>
	);
};
