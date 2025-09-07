import { History } from '../../../icons/icons';
import { SearchInput } from '../../../search-input/search-input';
import s from './search-sheet.module.scss';

export const SearchSheet = () => {
  return (
    <main className={s.search_sheet}>
      <h2 className='headline-large'>Rechercher</h2>
      <p className='body-medium'>
        Cherchez, réservez ou commandez un livre grâce au site Librel.
      </p>
      <SearchInput />
      <div className={s.history_title}>
        <p className='label-large'>Recherches récentes</p>
        <button className='title-small'>Gérer</button>
      </div>
      <div className={s.history}>
        <HistoryLine>Spiderman</HistoryLine>
        <span className={s.divider} />
        <HistoryLine>Harry Potter</HistoryLine>
      </div>
    </main>
  );
};

const HistoryLine = ({ children }) => {
  const encodedValue = encodeURIComponent(children);
  return (
    <a target='_blank' href={`https://www.librel.be/listeliv.php?flou&mots_recherche=${encodedValue}&base=allbooks`} className={s.history_line}>
      <History className={s.icon} />
      <p className='body-large'>{children}</p>
    </a>
  );
};
