import s from './call-to-action.module.scss';

export const CallToAction = ({children, onClick, className}) => {
  return (
    <button className={s.call_to_action + ' ' + className} onClick={onClick}>
      <div>
        <p className='title-medium'>{children}</p>
      </div>
    </button>
  );
}