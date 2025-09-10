import { useContext, useEffect, useRef, useState } from 'react';
import { IconButton } from '../icon-button/icon-button';
import { ArrowUpwardAlt, Search } from '../icons/icons';
import s from './search-input.module.scss';
import { BottomSheetContext } from '../../context/bottom-sheet-context';
import Cookies from 'js-cookie';

export const SearchInput = ({ setSearchHistory }) => {
  const inputRef = useRef(null),
    [open] = useContext(BottomSheetContext),
    [input, setInput] = useState(''),
    handleSubmit = (e) => {
      e.preventDefault();
      if (!input) return;
      const encodedValue = encodeURIComponent(input);
      handleLocalStorage(input);
      setInput('');
      window.open(
        `https://www.librel.be/listeliv.php?flou&mots_recherche=${encodedValue}&base=allbooks`,
        '_blank'
      );
    },
    handleLocalStorage = (value) => {
      setSearchHistory((prev) => {
        let a = [...prev];
        if (a.length >= 5) a.pop();
        a.unshift(value);
        localStorage.setItem('marque-tapage-search-history', JSON.stringify(a));
        Cookies.set('marque-tapage-search-history', JSON.stringify(a), {
          expires: 365,
        });
        return a;
      });
    };
  useEffect(() => {
    const h = localStorage.getItem('marque-tapage-search-history');
    if (h) setSearchHistory(JSON.parse(h));
  }, []);
  useEffect(() => {
    if (open.isOpen) inputRef.current.focus({ preventScroll: true });
    else inputRef.current.blur();
    setInput('');
  }, [open.isOpen]);
  return (
    <div className={s.search_input}>
      <form onSubmit={handleSubmit}>
        <div onClick={() => inputRef.current.focus({ preventScroll: true })}>
          <Search />
          <input
            className='body-large'
            type='text'
            placeholder='Chercher'
            ref={inputRef}
            value={input}
            onInput={(e) => setInput(e.target.value)}
          />
        </div>
        <IconButton
          theme='secondary'
          disabled={!input}
          size='extra-large'
          onClick={handleSubmit}
          className={s.submit}
        >
          <ArrowUpwardAlt />
        </IconButton>
      </form>
    </div>
  );
};
