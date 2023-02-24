// Details Page
import { useContext, useEffect, useRef, useState } from 'react';

import Button from '../components/button';
import Card from '../components/card';
import Textarea from '../components/textarea';
import Answers from './_answers';

import { Context, questionType } from '../context';

import { ReactComponent as CommentIcon } from '../assets/images/Comment.svg';

import type { answerType } from '../context';

function Details() {
  const newAnswer = useRef<any>(null);

  const { questions, answers, setAnswers, currQuestionID } =
    useContext(Context);

  const [currentQuestion, setCurrentQuestion] = useState<questionType>();

  // find current question
  useEffect(() => {
    if (currQuestionID)
      setCurrentQuestion(questions?.find((q) => q?.id === currQuestionID));
  }, [questions, currQuestionID]);

  // create a new answer
  const sendAnswer = () => {
    if (!currQuestionID) return;
    fetch('http://localhost:3004/answers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // ts-ignore is used because is not normal to send id in body
        // @ts-ignore
        id: answers?.length + 1,
        questionID: currQuestionID,
        user: 'علی کیا',
        timestamp: new Date().toISOString(),
        'user-image': './assets/images/q-profile-img.svg',
        description: newAnswer?.current?.value,
        positive: 0,
        negative: 0,
      }),
    })
      .then((res) => res.json())
      .then((res: answerType) => {
        setAnswers?.((curr) => {
          const temp = [...(curr ?? [])];
          temp?.push(res);
          return temp;
        });
        newAnswer.current.value = '';
      });
  };

  return (
    <div className="flex-col-start gap-6">
      {currentQuestion ? (
        <>
          <Card
            imgURL={currentQuestion['user-image']}
            title={currentQuestion.title}
            date={currentQuestion.timestamp}
            customElement={
              <div className="flex-between-center gap-2">
                <CommentIcon />
                <span className="grey-12">
                  {new Intl.NumberFormat('fa-IR').format(
                    answers?.filter((a) => a?.questionID === currQuestionID)
                      ?.length ?? 0
                  )}
                </span>
              </div>
            }
          >
            <div className="flex-col-start gap-4 w-full px-6 py-3">
              <div className="self-start black-14">
                {currentQuestion.description}
              </div>
              {currentQuestion?.attachment ? (
                <img
                  width={700}
                  className="self-end"
                  src={currentQuestion.attachment}
                  alt="تصویر"
                />
              ) : null}
            </div>
          </Card>
          <div className="title">پاسخ‌ها</div>
          <Answers />
          <div className="title">پاسخ خود را ثبت کنید</div>
          <div className="grey-dark-12">پاسخ خود را بنویسید</div>
          <Textarea
            ref={newAnswer}
            className="w-full"
            placeholder="متن پاسخ..."
          />
          <Button variant="primary" onClick={sendAnswer}>
            ارسال پاسخ
          </Button>
        </>
      ) : null}
    </div>
  );
}

export default Details;
