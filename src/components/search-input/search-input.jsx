import { useContext, useEffect, useRef, useState } from 'react';
import { IconButton } from '../icon-button/icon-button';
import { ArrowUpwardAlt, Search } from '../icons/icons';
import s from './search-input.module.scss';
import { BottomSheetContext } from '../../context/bottom-sheet-context';

export const SearchInput = () => {
  const inputRef = useRef(null),
    [open] = useContext(BottomSheetContext),
    [input, setInput] = useState({ value: '', focused: true }),
    handleSubmit = (e) => {
      e.preventDefault();
      const encodedValue = encodeURIComponent(input.value);
      setInput({ ...input, value: '' });
      window.open(
        `https://www.librel.be/listeliv.php?flou&mots_recherche=${encodedValue}&base=allbooks`,
        '_blank'
      );
    }
  useEffect(() => {
    if (open.isOpen) inputRef.current.focus();
    else inputRef.current.blur();
    setInput({ ...input, value: '' });
  }, [open.isOpen]);
  return (
    <div className={s.search_input + ' ' + (input.focused ? s.focused : '')}>
      <form onSubmit={handleSubmit}>
        <div onClick={() => inputRef.current.focus()}>
          <Search />
          <input
            className='body-large'
            type='text'
            placeholder='Chercher'
            ref={inputRef}
            value={input.value}
            onInput={(e) => setInput({ ...input, value: e.target.value })}
            onFocus={() => setInput({ ...input, focused: true })}
            onBlur={() => setInput({ ...input, focused: false })}
          />
        </div>
        <IconButton theme='secondary' size='extra-large' className={s.submit}>
          <ArrowUpwardAlt />
        </IconButton>
      </form>
    </div>
  );
};
