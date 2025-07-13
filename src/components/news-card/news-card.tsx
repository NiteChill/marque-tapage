import type { ReactNode } from 'react';
import s from './news-card.module.scss';

type NewsCardProps = {
  children: ReactNode;
  img: string;
  alt: string;
  date: string;
  categories: string[];
};

export const NewsCard = ({
  children,
  img,
  alt,
  date,
  categories,
}: NewsCardProps) => {
  let c = '';
  categories.map((cat, id) => {
    if (id < categories.length - 1) c += cat + ', ';
    else c += cat;
  });
  return (
    <div className={s.news_card}>
      <img src={img} alt={alt} />
      <div>
        {children}
        <div>
          <p>{date}</p>
          <span></span>
          <p>
            {c}
          </p>
        </div>
      </div>
    </div>
  );
};
