import s from './schedule-sheet.module.scss';

export const ScheduleSheet = () => {
  return (
    <main className={s.schedule_sheet}>
      <h2 className='headline-large'>Horaire</h2>
      <p className='body-medium'>
        L'horaire ci dessous peut s'avérer incorrect dans certaine conditions
        exceptionnelles.
      </p>
    </main>
  );
};
