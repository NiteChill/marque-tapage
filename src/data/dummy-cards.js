import jeanCremers from '../assets/img/dummy-thumbnails/jean-cremers.png';
import emmaDervaux from '../assets/img/dummy-thumbnails/emma-dervaux.png';
import leoMarchand from '../assets/img/dummy-thumbnails/leo-marchand.png';
import ourMissingHearts from '../assets/img/dummy-thumbnails/our-missing-hearts.png';
import neverLetMeGo from '../assets/img/dummy-thumbnails/never-let-me-go.png';
import lePouvoir from '../assets/img/dummy-thumbnails/le-pouvoir.png';

export const dummyNews = [
	{
		id: 1,
		title: 'Salon du Livre de Paris',
		src: jeanCremers,
		text: 'Venez découvrir le stand de Marque Tapage et rencontrer nos auteurs fétiches lors du Salon du Livre de Paris. Des conférences, des dédicaces et des animations pour tous les âges. Ne manquez pas cet événement incontournable pour les amoureux des livres !',
		creationDate: new Date('2025-12-01'),
		categories: ['Salon', 'Livre', 'Paris'],
	},
	{
		id: 2,
		title: 'Rencontre littéraire avec une autrice',
		src: emmaDervaux,
		text: "Participez à une rencontre exclusive avec une autrice renommée. Échangez avec elle sur son œuvre, son processus d'écriture et posez toutes vos questions. Un moment privilégié pour les passionnés de littérature.",
		creationDate: new Date('2025-11-15'),
		categories: ['Rencontre', 'Autrice', 'Littérature'],
	},
	{
		id: 3,
		title: 'Dédicace au Marque Tapage',
		src: leoMarchand,
		text: "Venez rencontrer plusieurs écrivains de talent et faites dédicacer vos livres préférés ! L'occasion idéale pour échanger quelques mots avec les auteurs et repartir avec une dédicace unique. Un événement convivial pour les lecteurs et les collectionneurs.",
		creationDate: new Date('2025-12-01'),
		categories: ['Dédicaces', 'Rencontre', 'Marque Tapage'],
	},
];

export const dummyFavorites = [
	{
		id: 1,
		title: "L'écume des jours",
		src: ourMissingHearts,
		author: 'Boris Vian',
		creationDate: new Date('1947-03-01'),
		rating: 5,
		categories: ['Roman', 'Science-fiction', 'Fantastique'],
	},
	{
		id: 2,
		title: '1984',
		src: neverLetMeGo,
		author: 'George Orwell',
		rating: 4,
		creationDate: new Date('1949-06-08'),
		categories: ['Roman', 'Dystopie', 'Science-fiction'],
	},
	{
		id: 3,
		title: 'Le Petit Prince',
		src: lePouvoir,
		rating: 5,
		author: 'Antoine de Saint-Exupéry',
		creationDate: new Date('1943-04-06'),
		categories: ['Conte', 'Philosophie', 'Jeunesse'],
	},
];
