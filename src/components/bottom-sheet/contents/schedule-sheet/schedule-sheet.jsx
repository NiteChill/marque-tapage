import { ChevronRight } from '../../../icons/icons';
import s from './schedule-sheet.module.scss';
import phoneIcon from '../../../../assets/img/phone-icon.svg'
import mailIcon from '../../../../assets/img/mail-icon.svg';

export const ScheduleSheet = () => {
  return (
    <main className={s.schedule_sheet}>
      <h2 className='headline-large'>Horaire</h2>
      <p className='body-medium'>
        L'horaire ci dessous peut s'avérer incorrect dans certaine conditions
        exceptionnelles.
      </p>
      <div className={s.schedule}>
        <ScheduleLine label='Lundi' hours='Fermé' />
        <ScheduleLine label='Mar. - Ven.' hours='10:00 - 18:00' />
        <ScheduleLine label='Samedi' hours='10:00 - 17:00' />
        <ScheduleLine label='Dimanche' hours='Fermé' />
      </div>
      <h4 className='title-large'>Contact</h4>
      <div className={s.contacts}>
        <ContactsLine src={phoneIcon} alt='Phone'>
          +32 497 12 15 24
        </ContactsLine>
        <ContactsLine src={mailIcon} alt='Mail'>
          marquetapage@gmail.com
        </ContactsLine>
      </div>
    </main>
  );
};

const ScheduleLine = ({ label, hours }) => {
  return (
    <div className={s.schedule_line}>
      <p className='title-medium'>{label}</p>
      <p className='body-large'>{hours}</p>
    </div>
  );
};

const ContactsLine = ({ children, src, alt, onClick }) => {
  return (
    <div className={s.contacts_line} onClick={onClick}>
      <img src={src} alt={alt} />
      <p className='title-medium'>{children}</p>
      <ChevronRight />
    </div>
  );
};
