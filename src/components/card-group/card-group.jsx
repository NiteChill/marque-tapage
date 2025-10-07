import { Card } from '../card/card';
import { IconButton } from '../icon-button/icon-button';
import { ChevronRight, Star } from '../icons/icons';
import s from './card-group.module.scss';

export const CardGroup = ({ title, seeAllHandler, array }) => {
	return (
		<section className={s.card_group}>
			<header>
				<h2 className='headline-large'>{title}</h2>
				{/* <IconButton
					className={s.close_button}
					onClick={seeAllHandler}
				>
					<ChevronRight />
				</IconButton> */}
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
							<p className='body-large'>
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
							<h6 className='title-large'>{item.title}</h6>
							<p className='body-large'>
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
