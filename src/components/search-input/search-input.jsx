import { useContext, useEffect, useRef, useState } from 'react';
import { IconButton } from '../icon-button/icon-button';
import { ArrowForward, ArrowUpwardAlt, Search } from '../icons/icons';
import s from './search-input.module.scss';
import { BottomSheetContext } from '../../context/bottom-sheet-context';
import Cookies from 'js-cookie';
import { useSpring } from '@react-spring/web';

export const SearchInput = ({ setSearchHistory, setEdit }) => {
	const inputRef = useRef(null),
		[open] = useContext(BottomSheetContext),
		[input, setInput] = useState(''),
		[inputSpring, inputApi] = useSpring(() => ({
			from: {
				opacity: s ? 0 : 1,
				width: s ? '0' : '7.2rem',
			},
			config: {
				tension: 290,
				friction: 17,
			},
		})),
		handleSubmit = (e) => {
			e.preventDefault();
			if (!input) return;
			const encodedValue = encodeURIComponent(input);
			handleLocalStorage(input);
      setInput('');
      setEdit(false);
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
		if (open.isOpen) return;
		inputRef.current.blur();
		setInput('');
	}, [open.isOpen]);
	useEffect(() => {
		const s = input.replace(/\s/g, '');
		if (s.length > 1) return;
		console.log(s.length);

		inputApi.start({
			to: {
				opacity: s ? 1 : 0,
				width: s ? '7.2rem' : '0',
			},
		});
	}, [input]);
	return (
		<div className={s.search_input}>
			<form onSubmit={handleSubmit}>
				<div onClick={() => inputRef.current.focus()}>
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
					size='extra-large'
					onClick={handleSubmit}
					className={s.submit}
					animateButton={true}
					style={{
						touchAction: input.replace(/\s/g, '').length > 1 ? 'all' : 'none',
						...inputSpring,
					}}
				>
					<ArrowForward />
				</IconButton>
			</form>
		</div>
	);
};
