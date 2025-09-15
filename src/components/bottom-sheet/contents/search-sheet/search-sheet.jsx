import { useEffect, useState } from 'react';
import { Delete, History } from '../../../icons/icons';
import { SearchInput } from '../../../search-input/search-input';
import s from './search-sheet.module.scss';
import { TextButton } from '../../../text-button/text-button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { idGenerator, removeNonAlphanumeric } from '../../../../utils/utils';

export const SearchSheet = () => {
  let d = [];
  const [searchHistory, setSearchHistory] = useState([]),
    [edit, setEdit] = useState(false),
    handleDelete = (id, index) => {
      gsap
        .timeline({
          onComplete: () => {
            d.push(index);
          },
        })
        .to(`#${id}`, {
          x: '-100%',
          opacity: 0,
          height: 0,
          ease: 'power1.inOut',
          duration: 0.4,
        })
        // .to(`#${id}`, {
        //   height: 0,
        //   ease: 'power1.inOut',
        //   duration: 0.2,
        // });
    },
    updateHistory = () => {
      setSearchHistory((prev) => {
        const a = prev.filter((_, index) => {
          return !new Set(d).has(index);
        });
        localStorage.setItem('marque-tapage-search-history', JSON.stringify(a));
        return a;
      });
    };
  useEffect(() => {
    const h = localStorage.getItem('marque-tapage-search-history');
    if (h) setSearchHistory(JSON.parse(h));
  }, []);
  useGSAP(() => {
    if (searchHistory.length === 0) return;
    gsap.fromTo(
      '#search-history-delete-button',
      {
        width: edit ? 0 : 56,
        scale: edit ? 0.75 : 1,
      },
      {
        width: edit ? 56 : 0,
        scale: edit ? 1 : 0.7,
        ease: 'elastic(1,0.8)',
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
      <SearchInput setSearchHistory={setSearchHistory} />
      <div className={s.history_title}>
        <p className='label-large'>Recherches récentes</p>
        <TextButton
          active={edit}
          onClick={() => {
            edit && updateHistory();
            setEdit(!edit);
          }}
        >
          {['Gérer', 'OK']}
        </TextButton>
      </div>
      <div className={s.history}>
        {searchHistory.map((el, id) => (
          <HistoryLine
            key={id}
            edit={edit}
            id={removeNonAlphanumeric(el) + idGenerator()}
            index={id}
            handleDelete={handleDelete}
          >
            {el}
          </HistoryLine>
        ))}
      </div>
    </main>
  );
};

const HistoryLine = ({ children, edit, id, index, handleDelete }) => {
  const encodedValue = encodeURIComponent(children);
  return (
    <div className={s.history_line + ' history-line-reset'} id={id}>
      <a
        target='_blank'
        href={`https://www.librel.be/listeliv.php?flou&mots_recherche=${encodedValue}&base=allbooks`}
      >
        <History className={s.icon} />
        <p className='body-large'>{children}</p>
      </a>
      <button
        tabIndex={edit ? 0 : -1}
        className={s.icon_button}
        id='search-history-delete-button'
        onClick={() => handleDelete(id, index)}
      >
        <Delete className={s.icon} />
      </button>
    </div>
  );
};
