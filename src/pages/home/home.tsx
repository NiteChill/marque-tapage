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
          <IconButton alt='Logo marque tapage extra small'>
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
        <motion.h2
          initial={{
            translateY: '10%',
            opacity: 0,
          }}
          animate={{
            translateY: '0',
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
          }}
          className='display-medium'
        >
          Bienvenue au Marque Tapage
        </motion.h2>
        {/* <h2 className='display-medium'>Bienvenue au Marque Tapage</h2> */}
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
            <Button color='blue'>
              <img src={searchIcon} alt='Réserver' />
              <p className='label-large'>Réserver</p>
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
            <Button to='news' color='green'>
              <img src={brandAwaranessIcon} alt='Actualités' />
              <p className='label-large'>Actualités</p>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
