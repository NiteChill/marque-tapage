import s from './favorites.module.scss';
import { motion } from 'motion/react';
import { Header } from '../../components/header/header';
import { IconButton } from '../../components/icon-button/icon-button';
import arrowBackIOSNew from '../../assets/img/arrow_back_ios_new-default-24dp.svg';

export const Favorites = () => {
  return (
    <motion.div
      className={s.favorites}
      variants={{
        initial: {
          x: '70vw',
        },
        final: {
          x: 0,
          transition: {
            duration: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          },
        },
      }}
      initial='initial'
      animate='final'
    >
      <Header>
        <IconButton to='/' alt='Logo marque tapage extra small'>
          {arrowBackIOSNew}
        </IconButton>
        <h1 className='headline-small'>Coups de coeur</h1>
      </Header>
    </motion.div>
  );
};
