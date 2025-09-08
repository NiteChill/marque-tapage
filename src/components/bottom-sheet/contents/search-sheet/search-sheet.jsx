import { useEffect, useState } from 'react';
import { Delete, History } from '../../../icons/icons';
import { SearchInput } from '../../../search-input/search-input';
import s from './search-sheet.module.scss';
import Cookies from 'js-cookie';
import { TextButton } from '../../../text-button/text-button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const SearchSheet = () => {
  const [searchHistory, setSearchHistory] = useState([]),
    [edit, setEdit] = useState(false);
  useEffect(() => {
    const h = Cookies.get('marque-tapage-search-history');
    if (h) setSearchHistory(JSON.parse(h));
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      '#search-history-delete-button',
      {
        width: edit ? 0 : 56,
        scale: edit ? 0.75 : 1,
      },
      {
        width: edit ? 56 : 0,
        scale: edit ? 1 : 0.75,
        ease: 'elastic(1,1)',
        duration: 0.4,
        stagger: 0.02,
      }
    );
  }, [edit]);
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
        <TextButton active={edit} onClick={() => setEdit(!edit)}>
          {['Gérer', 'OK']}
        </TextButton>
      </div>
      <div className={s.history}>
        {searchHistory.map((el, id) => (
          <div key={crypto.randomUUID()}>
            {id !== 0 && <span className={s.divider} />}
            <HistoryLine edit={edit}>{el}</HistoryLine>
          </div>
        ))}
      </div>
    </main>
  );
};

const HistoryLine = ({ children, edit }) => {
  const encodedValue = encodeURIComponent(children);
  return (
    <div className={s.history_line}>
      <a
        target='_blank'
        href={`https://www.librel.be/listeliv.php?flou&mots_recherche=${encodedValue}&base=allbooks`}
      >
        <History className={s.icon} />
        <p className='body-large'>{children}</p>
      </a>
      <button tabIndex={edit ? 0 : -1} className={s.icon_button} id='search-history-delete-button'>
        <Delete className={s.icon} />
      </button>
    </div>
  );
};
