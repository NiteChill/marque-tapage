import { motion } from 'motion/react';
import { Header } from '../../components/header/header';
import { IconButton } from '../../components/icon-button/icon-button';
import { Button } from '../../components/button/button';
import logoExtraSmall from '../../assets/img/logo-extra-small.svg';
import search from '../../assets/img/search-default-24dp.svg';
import s from './home.module.scss';
import favoriteIcon from '../../assets/img/favorite-primary-20dp.svg';
import searchIcon from '../../assets/img//search-secondary-20dp.svg';
import brandAwaranessIcon from '../../assets/img/brand_awareness-tertiary-20dp.svg';
import { AboutCard } from '../../components/about-card/about-card';
import arch from '../../assets/img/arch.svg';
import drops from '../../assets/img/drops.svg';
import eye from '../../assets/img/eye.svg';
import waterfall from '../../assets/img/waterfall.svg';

export const Home = () => {
  return (
    <div className={s.home}>
      <Header>
        <motion.div
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
        >
          <IconButton to='/' alt='Logo marque tapage extra small' reload>
            {logoExtraSmall}
          </IconButton>
        </motion.div>
        <motion.h1
          className='headline-small'
          initial={{
            translateX: '2rem',
            opacity: 0,
          }}
          animate={{
            translateX: '0',
            opacity: 1,
          }}
        >
          Marque Tapage
        </motion.h1>
        <motion.div
          className='headline-small'
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <IconButton alt='Logo marque tapage extra small'>{search}</IconButton>
        </motion.div>
      </Header>
      <section className={s.welcome_message}>
        <div className={s.message_container}>
          <div className={s.shapes_container}>
            <motion.img
              src={arch}
              alt='Arche'
              initial={{ scale: 0.5, opacity: 0, translateX: '-2rem' }}
              animate={{ scale: 1, opacity: 1, translateX: 0 }}
              transition={{ delay: 0.8 }}
            />
            <motion.img
              src={waterfall}
              alt="Chute d'eau"
              initial={{ scale: 0.5, opacity: 0, translateX: '-2rem' }}
              animate={{ scale: 1, opacity: 1, translateX: 0 }}
              transition={{ delay: 0.85 }}
            />
            <motion.img
              src={eye}
              alt='Oeil'
              initial={{ scale: 0.5, opacity: 0, translateX: '-2rem' }}
              animate={{ scale: 1, opacity: 1, translateX: 0 }}
              transition={{ delay: 0.9 }}
            />
            <motion.img
              src={drops}
              alt='Goutes'
              initial={{ scale: 0.5, opacity: 0, translateX: '-2rem' }}
              animate={{ scale: 1, opacity: 1, translateX: 0 }}
              transition={{ delay: 0.95 }}
            />
          </div>
          <motion.h2
            initial={{
              translateY: '2rem',
              opacity: 0,
            }}
            animate={{
              translateY: '0',
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}
            className='display-small'
          >
            Bienvenue au Marque Tapage
          </motion.h2>
        </div>
        <div className={s.action_container}>
          <motion.div
            style={{ transformOrigin: 'center left' }}
            initial={{
              rotate: 30,
              opacity: 0,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            <Button to='favorites' color='pink'>
              <img src={favoriteIcon} alt='Favoris' />
              <p className='label-large'>Favoris</p>
            </Button>
          </motion.div>
          <motion.div
            style={{ transformOrigin: 'center right' }}
            initial={{
              rotate: -30,
              opacity: 0,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
          >
            <Button to='news' color='blue'>
              <img src={brandAwaranessIcon} alt='Actualités' />
              <p className='label-large'>Actualités</p>
            </Button>
          </motion.div>
          <motion.div
            style={{ transformOrigin: 'center right' }}
            initial={{
              rotate: -30,
              opacity: 0,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
            }}
          >
            <Button color='green'>
              <img src={searchIcon} alt='Réserver' />
              <p className='label-large'>Réserver</p>
            </Button>
          </motion.div>
        </div>
      </section>
      <AboutCard />
    </div>
  );
};
