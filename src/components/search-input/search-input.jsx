import { useContext, useEffect, useRef, useState } from 'react';
import { IconButton } from '../icon-button/icon-button';
import { ArrowUpwardAlt, Search } from '../icons/icons';
import s from './search-input.module.scss';
import { BottomSheetContext } from '../../context/bottom-sheet-context';
import Cookies from 'js-cookie';

export const SearchInput = ({ searchHistory, setSearchHistory }) => {
  const inputRef = useRef(null),
    [open] = useContext(BottomSheetContext),
    [input, setInput] = useState({ value: '', focused: true }),
    handleSubmit = (e) => {
      e.preventDefault();
      if (!input.value) return;
      const encodedValue = encodeURIComponent(input.value);
      handleCookies(input.value);
      setInput({ ...input, value: '' });
      window.open(
        `https://www.librel.be/listeliv.php?flou&mots_recherche=${encodedValue}&base=allbooks`,
        '_blank'
      );
    },
    handleCookies = (value) => {
      setSearchHistory((prev) => {
        let a = [...prev];
        if (a.length >= 5) a.pop();
        a.unshift(value);
        Cookies.set('marque-tapage-search-history', JSON.stringify(a), {
          expires: 365,
        });
        return a;
      });
    };
  useEffect(() => {
    const h = Cookies.get('marque-tapage-search-history');
    if (h) setSearchHistory(JSON.parse(h));
  }, []);
  useEffect(() => {
    if (open.isOpen) inputRef.current.focus({ preventScroll: true });
    else inputRef.current.blur();
    setInput({ ...input, value: '' });
  }, [open.isOpen]);
  return (
    <div className={s.search_input + ' ' + (input.focused ? s.focused : '')}>
      <form onSubmit={handleSubmit}>
        <div onClick={() => inputRef.current.focus({ preventScroll: true })}>
          <Search />
          <input
            className='body-large'
            type='text'
            placeholder='Chercher'
            ref={inputRef}
            value={input.value}
            onInput={(e) => setInput({ ...input, value: e.target.value })}
            // onFocus={(e) => setInput({ ...input, focused: true })}
            // onBlur={() => setInput({ ...input, focused: false })}
          />
        </div>
        <IconButton theme={input.value ? 'secondary' : 'disabled'} size='extra-large' onClick={handleSubmit} className={s.submit}>
          <ArrowUpwardAlt />
        </IconButton>
      </form>
    </div>
  );
};
