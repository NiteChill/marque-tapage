import s from './about-card.module.scss';
import { motion } from 'motion/react';
import annonceIllu from '../../assets/img/annonce-illu.svg';

export const AboutCard = () => {
  return (
    <motion.div
      initial={{
        translateY: '2rem',
        opacity: 0,
      }}
      animate={{
        translateY: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.8,
      }}
      className={s.about_card}
    >
      <img src={annonceIllu} alt='Annonce' />
      <div>
        <h3 className='headline-small'>Marque Tapage c'est quoi?</h3>
        <p className='body-large'>
          Marque Tapage est une librairie indépendante qui se concentre sur le
          conseil et le rapport humain. Korem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
          tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
          sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
          condimentum velit, sit amet feugiat lectus.
        </p>
      </div>
    </motion.div>
  );
};
