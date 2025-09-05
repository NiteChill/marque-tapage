import s from './favorites-sheet.module.scss';

export const FavoritesSheet = () => {
  return (
    <main className={s.favorites_sheet}>
      <h2 className='headline-large'>Coups de coeur</h2>
      <p className='body-medium'>
        Découvrez les livres favoris du Marque Tapage et trouver votre prochaine
        lecture.
      </p>
    </main>
  );
};
