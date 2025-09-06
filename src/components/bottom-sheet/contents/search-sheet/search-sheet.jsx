import { SearchInput } from '../../../search-input/search-input';
import s from './search-sheet.module.scss';

export const SearchSheet = () => {
  return (
    <main className={s.search_sheet}>
      <h2 className='headline-large'>Rechercher</h2>
      <p className='body-medium'>
        Cherchez, réservez ou commandez un livre grâce au site Librel.
      </p>
      <SearchInput></SearchInput>
    </main>
  );
};
