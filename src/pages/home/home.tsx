import { motion } from 'motion/react';
import { Header } from '../../components/header/header';
import { IconButton } from '../../components/icon-button/icon-button';
import { Button } from '../../components/button/button';
import logoExtraSmall from '../../assets/img/logo-extra-small.svg';
import search from '../../assets/img/search-default-24dp.svg';
import s from './home.module.scss';
import favoriteIcon from '../../assets/img/favorite-primary-20dp.svg';
import searchIcon from '../../assets/img/search-tertiary-20dp.svg';
import brandAwaranessIcon from '../../assets/img/brand_awareness-secondary-20dp.svg';

export const Home = () => {
  return (
    <motion.div
      className={s.home}
      initial={{
        x: '-70vw',
      }}
      animate={{
        x: 0,
        transition: {
          duration: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        },
      }}
      exit={{ x: '-70vw' }}
    >
      <Header>
        <IconButton alt='Logo marque tapage extra small'>
          {logoExtraSmall}
        </IconButton>
        <h1 className='headline-small'>Marque Tapage</h1>
        <IconButton alt='Logo marque tapage extra small'>{search}</IconButton>
      </Header>
      <section className={s.welcome_message}>
        <h2 className='display-medium'>Bienvenue au Marque Tapage</h2>
        <div className={s.action_container}>
          <Button to='favorites' color='pink'>
            <img src={favoriteIcon} alt='Favoris' />
            <p className='label-large'>Favoris</p>
          </Button>
          <Button color='blue'>
            <img src={searchIcon} alt='Réserver' />
            <p className='label-large'>Réserver</p>
          </Button>
          <Button to='news' color='green'>
            <img src={brandAwaranessIcon} alt='Actualités' />
            <p className='label-large'>Actualités</p>
          </Button>
        </div>
      </section>
    </motion.div>
  );
};
