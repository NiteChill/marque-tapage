import { Link } from 'react-router-dom';
import { Page } from '../../components/page/page';
import s from './home.module.scss';
import arch from '../../assets/img/arch.svg';
import drops from '../../assets/img/drops.svg';
import eye from '../../assets/img/eye.svg';
import waterfall from '../../assets/img/waterfall.svg';
import { FeatureButton } from '../../components/feature-button/feature-button';
import {
  BrandAwareness,
  Favorite,
  Schedule,
  Search,
} from '../../components/icons/icons';
import { FavoritesSheet } from '../../components/bottom-sheet/contents/favorites-sheet/favorites-sheet';
import { NewsSheet } from '../../components/bottom-sheet/contents/news-sheet/news-sheet';
import { SearchSheet } from '../../components/bottom-sheet/contents/search-sheet/search-sheet';
import { ScheduleSheet } from '../../components/bottom-sheet/contents/schedule-sheet/schedule-sheet';

export const Home = ({ setBottomSheet, z }) => {
  return (
    <Page
      className={s.home}
      id='parent'
      style={{
        transform: z.to((val) => `perspective(100px) translateY(${Math.abs(val) / 5 * 16 }px) translateZ(${val}px)`),
        borderRadius: z.to((val) => `${(Math.abs(val) / 5) * 1.2}rem`),
        background: z.to((val) => {
          const progress = Math.abs(val) / 5,
            color1 = [254, 255, 255], // #FEFFFF (surface-0)
            color2 = [246, 247, 249]; // #F6F7F9 (surface-2)
          return `rgb(${Math.round(
            color1[0] + (color2[0] - color1[0]) * progress
          )}, ${Math.round(
            color1[1] + (color2[1] - color1[1]) * progress
          )}, ${Math.round(color1[2] + (color2[2] - color1[2]) * progress)})`;
        }),
      }}
      animate
    >
      <section className={s.hero}>
        <div className={s.shapes}>
          <img src={arch} alt='arch' />
          <img src={waterfall} alt='arch' />
          <img src={eye} alt='arch' />
          <img src={drops} alt='arch' />
        </div>
        <h1 className='display-small'>Marque Tapage</h1>
        <nav className={s.features_container}>
          <FeatureButton
            theme='primary'
            onClick={() => setBottomSheet([true, <FavoritesSheet />])}
          >
            <Favorite />
          </FeatureButton>
          <FeatureButton
            theme='tertiary'
            onClick={() => setBottomSheet([true, <NewsSheet />])}
          >
            <BrandAwareness />
          </FeatureButton>
          <FeatureButton
            theme='secondary'
            onClick={() => setBottomSheet([true, <SearchSheet />])}
          >
            <Search />
          </FeatureButton>
          <FeatureButton
            onClick={() => setBottomSheet([true, <ScheduleSheet />])}
          >
            <Schedule />
          </FeatureButton>
        </nav>
      </section>
      <Link to='/favorites/A_favorites_article'>
        This is a favorites-article...
      </Link>
      <Link to='/news/A_news_article'>This is a news-article...</Link>
      <div style={{ minHeight: '100vh' }}></div>
    </Page>
  );
};
