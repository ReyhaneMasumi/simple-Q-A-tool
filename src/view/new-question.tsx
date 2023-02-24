import { memo } from 'react';

import Button from '../components/button';
import Input from '../components/input';
import Textarea from '../components/textarea';

import { ReactComponent as CloseIcon } from '../assets/images/Close.svg';

interface IProps {
  onClose: () => void;
}

function NewQuestion({ onClose }: IProps) {
  return (
    <div dir="rtl" className="bg-Gray/Lightest shadow-card rounded-lg">
      <header className="flex-between-center sticky top-0 w-full h-14 px-6 py-3 bg-white overflow-hidden z-10 shadow-header rounded-lg">
        <div className="flex-between-center gap-3.5 card-title">
          ایجاد سوال جدید
        </div>
        <CloseIcon className="cursor-pointer" onClick={onClose} />
      </header>
      <div className="flex-col-start gap-3.5 w-full px-6 py-3">
        <div className="flex-col-start gap-2.5 w-full">
          <div className="grey-dark-12 ">موضوع</div>
          <Input className="w-full" />
        </div>
        <div className="flex-col-start gap-2.5 w-full">
          <div className="grey-dark-12 ">متن سوال</div>
          <Textarea className="w-full" />
        </div>

        <div className="flex-end-center">
          <Button variant="cancel" onClick={onClose}>
            انصراف
          </Button>
          <Button>ایجاد سوال</Button>
        </div>
      </div>
    </div>
  );
}

export default memo(NewQuestion);
