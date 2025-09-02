import s from './favorites-article.module.scss';
import { Link, useParams } from 'react-router-dom';
import { Page } from '../../components/page/page';
import { IconButton } from '../../components/icon-button/icon-button';
import { ArrowBack } from '../../components/icons/icons';
import { Navbar } from '../../components/navbar/navbar';

export const FavoritesArticle = () => {
  const params = useParams();
  return (
    <Page className={s.favorites_article} id='child'>
        <Navbar>
          <IconButton size='big' to='/'>
            <ArrowBack />
          </IconButton>
        </Navbar>
      <h1>{params?.article}</h1>
    </Page>
  );
};
