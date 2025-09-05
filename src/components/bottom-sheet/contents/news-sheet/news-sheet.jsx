import s from './news-sheet.module.scss';

export const NewsSheet = () => {
  return (
    <main className={s.news_sheet}>
      <h2 className='headline-large'>Actualités</h2>
      <p className='body-medium'>
        Découvrez les nouveautés du Marque Tapage et soyez au courant de tous
        les événements.
      </p>
    </main>
  );
};
