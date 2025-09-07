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
import { useContext } from 'react';
import { BottomSheetContext } from '../../context/bottom-sheet-context';

export const Home = () => {
  const [, setOpen, progress] = useContext(BottomSheetContext);
  return (
    <Page
      className={s.home}
      id='parent'
      style={{
        transform: progress.to(
          (val) => {
            // recreating the perspective effect with scale because translateZ has a rendering issue where border-radius doesn't clip correctly when 3D transformed if overflow isn't hidden.
            const perspective = 100,
              translateZ = -val / 20, // goes from 0 when val = 0 to -5 when val = 100
              scale = perspective / (perspective - translateZ);
            return `translateY(${(val / 100) * 16}px) scale(${
              scale
            })`
          }
        ),
        borderRadius: progress.to((val) => `${(val / 100) * 1.2}rem`),
        background: progress.to((val) => {
          const pV = val / 100,
            c1 = [254, 255, 255], // #FEFFFF (surface-0)
            c2 = [246, 247, 249]; // #F6F7F9 (surface-2)
          return `rgb(${Math.round(c1[0] + (c2[0] - c1[0]) * pV)}, ${Math.round(
            c1[1] + (c2[1] - c1[1]) * pV
          )}, ${Math.round(c1[2] + (c2[2] - c1[2]) * pV)})`;
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
            onClick={() =>
              setOpen({
                isOpen: true,
                content: <FavoritesSheet />,
                hasHeader: true,
              })
            }
          >
            <Favorite />
          </FeatureButton>
          <FeatureButton
            theme='tertiary'
            onClick={() =>
              setOpen({
                isOpen: true,
                content: <NewsSheet />,
                hasHeader: true,
              })
            }
          >
            <BrandAwareness />
          </FeatureButton>
          <FeatureButton
            theme='secondary'
            onClick={() =>
              setOpen({
                isOpen: true,
                content: <SearchSheet />,
                hasHeader: true,
              })
            }
          >
            <Search />
          </FeatureButton>
          <FeatureButton
            onClick={() =>
              setOpen({
                isOpen: true,
                content: <ScheduleSheet />,
                hasHeader: true,
              })
            }
          >
            <Schedule />
          </FeatureButton>
        </nav>
      </section>
      <Link to='/favorites/A_favorites_article'>
        This is a favorites-article...
      </Link>
      <Link to='/news/A_news_article'>This is a news-article...</Link>
      <div style={{ minHeight: '200vh'}}></div>
    </Page>
  );
};
