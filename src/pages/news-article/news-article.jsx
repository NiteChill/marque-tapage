import s from './news-article.module.scss';
import { useParams } from 'react-router-dom';
import { Page } from '../../components/page/page';
import { ArrowBack } from '../../components/icons/icons';
import { IconButton } from '../../components/icon-button/icon-button';
import { Navbar } from '../../components/navbar/navbar';

export const NewsArticle = () => {
  const params = useParams();
  return (
    <Page className={s.news_article} id='child'>
      <Navbar>
        <IconButton size='big' to='/'>
          <ArrowBack />
        </IconButton>
      </Navbar>
      <h1>{params?.article}</h1>
    </Page>
  );
};
