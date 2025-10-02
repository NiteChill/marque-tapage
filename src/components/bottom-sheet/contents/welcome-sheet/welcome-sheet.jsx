import s from './welcome-sheet.module.scss';
import welcomeIllustration from '../../../../assets/img/welcome-illustration.svg';
import { CallToAction } from '../../../call-to-action/call-to-action';
import { useNavigate } from 'react-router-dom';

export const WelcomeSheet = () => {
  const navigate = useNavigate();
  return (
    <main className={s.welcome_sheet}>
      <div className={s.content}>
      <div className={s.illustration}>
        <img src={welcomeIllustration} alt='Illustration de bienvenue' />
      </div>
      <h2 className='headline-small'>Bienvenue au Marque Tapage</h2>
      <p className='body-extra-large'>
        Ce site rassemble l'expertise du Marque Tapage au même endroit.
      </p>
      <p className='body-extra-large'>
        Recherchez et réservez des livres, découvrez nos coups de coeurs et les news du magasin.
      </p>
      </div>
      <div className={s.action}>
        <CallToAction
          className={s.call_to_action}
          onClick={() => {
            navigate('/');
            // setOpen((prev) => ({ ...prev, isOpen: false }));
            localStorage.setItem('marque-tapage-visited', 'true');
          }}
        >
          Continuer
        </CallToAction>
      </div>
    </main>
  );
};
