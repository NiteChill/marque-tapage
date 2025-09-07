import { useEffect, useState } from 'react';
import { History } from '../../../icons/icons';
import { SearchInput } from '../../../search-input/search-input';
import s from './search-sheet.module.scss';
import Cookies from 'js-cookie';

export const SearchSheet = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  useEffect(() => {
    const h = Cookies.get('marque-tapage-search-history');
    if (h) setSearchHistory(JSON.parse(h));
  }, []);
  return (
    <main className={s.search_sheet}>
      <h2 className='headline-large'>Rechercher</h2>
      <p className='body-medium'>
        Cherchez, réservez ou commandez un livre grâce au site Librel.
      </p>
      <SearchInput
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
      />
      <div className={s.history_title}>
        <p className='label-large'>Recherches récentes</p>
        <button className='title-small'>Gérer</button>
      </div>
      <div className={s.history}>
        {searchHistory.map((el, id) => (
          <div key={crypto.randomUUID()}>
            {id === 0 && <span className='divider' />}
            <HistoryLine>{el}</HistoryLine>
          </div>
        ))}
      </div>
    </main>
  );
};

const HistoryLine = ({ children }) => {
  const encodedValue = encodeURIComponent(children);
  return (
    <a
      target='_blank'
      href={`https://www.librel.be/listeliv.php?flou&mots_recherche=${encodedValue}&base=allbooks`}
      className={s.history_line}
    >
      <History className={s.icon} />
      <p className='body-large'>{children}</p>
    </a>
  );
};
