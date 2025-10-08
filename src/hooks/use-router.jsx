const routes = {
	'/welcome': 'Marque Tapage | Bienvenue',
	'/favorites': 'Marque Tapage | Coups de coeur',
	'/news': 'Marque Tapage | Actualités',
	'/search': 'Marque Tapage | Rechercher',
	'/schedule': 'Marque Tapage | Horaire',
};

export const useRouter = () => {
	return function router(loc, setLoc) {
		const path = loc.pathname;
		if (routes[path]) {
			document.title = routes[path];
			setLoc(path);
		} else if (path.startsWith('/news/')) {
			document.title = 'Marque Tapage | Actualités';
			setLoc('/news/:id');
		} else if (path.startsWith('/favorites/')) {
			document.title = 'Marque Tapage | Coups de coeur';
			setLoc('/favorites/:id');
		} else {
			document.title = "Marque Tapage | La Librairie à hauteur d'Enfance";
			setLoc(null);
		}
	};
};
