import s from './welcome-sheet.module.scss';
import welcomeIllustration from '../../../../assets/img/welcome-illustration.svg';
import { CallToAction } from '../../../call-to-action/call-to-action';
import { useContext } from 'react';
import { BottomSheetContext } from '../../../../context/bottom-sheet-context';

export const WelcomeSheet = () => {
  const [, setOpen] = useContext(BottomSheetContext);
  return (
    <main className={s.welcome_sheet}>
      <div className={s.content}>
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
      </div>
      <div className={s.action}>
        <CallToAction
          className={s.call_to_action}
          onClick={() => {
            setOpen((prev) => ({ ...prev, isOpen: false }));
            localStorage.setItem('marque-tapage-visited', 'true');
          }}
        >
          Continuer
        </CallToAction>
      </div>
    </main>
  );
};
