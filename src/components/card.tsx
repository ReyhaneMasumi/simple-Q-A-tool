/* Card Component */

import { memo } from 'react';

import { ReactComponent as SeperatorIcon } from '../assets/images/seperator.svg';

import type { ReactElement } from 'react';

interface IProps {
  imgURL: string;
  title: string;
  date: string;
  customElement: ReactElement;
  children: ReactElement;
}

function Card({ imgURL, title, date, customElement, children }: IProps) {
  return (
    <div className="w-full min-h-[155px] bg-Gray/Lightest shadow-card rounded-lg">
      <header className="flex-between-center top-0 w-full h-14 px-6 py-3 bg-white overflow-hidden z-10 shadow-header rounded-lg">
        <div className="flex-between-center gap-3.5 card-title">
          <img src={imgURL} alt="تصویر" />
          <span>{title}</span>
        </div>
        <div className="flex-between-center gap-9">
          <div className="flex-between-center gap-3.5">
            <div>
              <span className="grey-12">ساعت : </span>
              <span className="black-12">
                {/* Time with persian numbers */}
                {new Date(date).toLocaleTimeString('fa-IR') ?? '-'}
              </span>
            </div>
            <SeperatorIcon />
            <div>
              <span className="grey-12">تاریخ : </span>
              <span className="black-12">
                {/* Jalali Date */}
                {new Intl.DateTimeFormat('fa-IR').format(new Date(date)) ?? '-'}
              </span>
            </div>
          </div>
          {/* Custom header component such as rating or comments */}
          {customElement}
        </div>
      </header>
      {/* Body of card is fully customizable */}
      {children}
    </div>
  );
}

export default memo(Card);
