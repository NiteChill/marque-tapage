import { FavoritesSheet } from '../components/bottom-sheet/contents/favorites-sheet/favorites-sheet';
import { NewsSheet } from '../components/bottom-sheet/contents/news-sheet/news-sheet';
import { ScheduleSheet } from '../components/bottom-sheet/contents/schedule-sheet/schedule-sheet';
import { SearchSheet } from '../components/bottom-sheet/contents/search-sheet/search-sheet';
import { WelcomeSheet } from '../components/bottom-sheet/contents/welcome-sheet/welcome-sheet';

export const useRouter = () => {
	return function router(location, setOpen) {
		switch (location.pathname) {
			case '/b/welcome':
				document.title = 'Marque Tapage | Bienvenue';
				setOpen({
					isOpen: true,
					content: <WelcomeSheet />,
					header: null,
					height: '100dvh',
				});
				break;
			case '/b/favorites':
				document.title = 'Marque Tapage | Coups de coeur';
				setOpen({
					isOpen: true,
					content: <FavoritesSheet />,
					header: 'Coups de coeur',
					height: null,
				});
				break;
			case '/b/news':
				document.title = 'Marque Tapage | Actualités';
				setOpen({
					isOpen: true,
					content: <NewsSheet />,
					header: 'Actualités',
					height: null,
				});
				break;
			case '/b/search':
				document.title = 'Marque Tapage | Rechercher';
				setOpen({
					isOpen: true,
					content: <SearchSheet />,
					header: 'Rechercher',
					height: null,
				});
				break;
			case '/b/schedule':
				document.title = 'Marque Tapage | Horaire';
				setOpen({
					isOpen: true,
					content: <ScheduleSheet />,
					header: 'Horaire',
					height: null,
				});
				break;
			default:
				document.title = "Marque Tapage | La Librairie à hauteur d'Enfance";
		}
	};
};
