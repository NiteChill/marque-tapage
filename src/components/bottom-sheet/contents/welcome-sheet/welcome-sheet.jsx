import s from './welcome-sheet.module.scss';
import welcomeIllustration from '../../../../assets/img/welcome-illustration.svg';
import { CallToAction } from '../../../call-to-action/call-to-action';
import Cookies from 'js-cookie';

export const WelcomeSheet = ({ setOpen }) => {
  return (
    <main className={s.welcome_sheet}>
      <div className={s.illustration}>
        <img src={welcomeIllustration} alt='Illustration de bienvenue' />
      </div>
      <h2 className='headline-large'>Bienvenue chez Marque Tapage</h2>
      <p className='body-medium'>
        Grâce à ce site, découvrez notre sélection de livre, soyez les premiers
        à découvrir nos actualités et réserve des livres à travers librel.
      </p>
      <p className='body-medium'>
        N'attendez plus et rejoignez l'aventure Marque Tapage à 100%!
      </p>
      <div className={s.action}>
        <CallToAction className={s.call_to_action} onClick={() => {
          setOpen([false, open[1], open[2]]);
          Cookies.set('marque-tapage-visited', 'true', { expires: 365 });
        }}>Continuer</CallToAction>
      </div>
    </main>
  );
};
