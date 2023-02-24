// Create new question which open in modal

import { memo, useContext, useRef } from 'react';

import Button from '../components/button';
import Input from '../components/input';
import Textarea from '../components/textarea';

import { Context } from '../context';

import type { questionType } from '../context';

import { ReactComponent as CloseIcon } from '../assets/images/Close.svg';

interface IProps {
  onClose: () => void;
}

function NewQuestion({ onClose }: IProps) {
  const { questions, setQuestions } = useContext(Context);

  const subject = useRef<any>(null);
  const description = useRef<any>(null);

  const addNewQuestion = () => {
    fetch('http://localhost:3004/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // @ts-ignore
        id: questions?.length + 1,
        title: subject?.current?.value,
        timestamp: new Date().toISOString(),
        'user-image': './assets/images/q-profile-img.svg',
        description: description?.current?.value,
      }),
    })
      .then((res) => res.json())
      .then((res: questionType) => {
        setQuestions?.((curr) => {
          const temp = [...(curr ?? [])];
          temp?.push(res);
          return temp;
        });
        onClose();
      });
  };

  return (
    <div dir="rtl" className="bg-Gray/Lightest shadow-card rounded-lg">
      <header className="flex-between-center sticky top-0 w-full h-14 px-6 py-3 bg-white overflow-hidden z-10 shadow-header rounded-lg">
        <div className="flex-between-center gap-3.5 card-title">
          ایجاد سوال جدید
        </div>
        <CloseIcon className="cursor-pointer" onClick={onClose} />
      </header>
      <div className="flex-col-start gap-3.5 w-full px-5 py-6">
        <div className="flex-col-start gap-2.5 w-full">
          <div className="grey-dark-12 ">موضوع</div>
          <Input ref={subject} className="w-full" />
        </div>
        <div className="flex-col-start gap-2.5 w-full">
          <div className="grey-dark-12 ">متن سوال</div>
          <Textarea ref={description} className="w-full" />
        </div>

        <div className="flex-end-center">
          <Button variant="cancel" onClick={onClose}>
            انصراف
          </Button>
          <Button onClick={addNewQuestion}>ایجاد سوال</Button>
        </div>
      </div>
    </div>
  );
}

export default memo(NewQuestion);
