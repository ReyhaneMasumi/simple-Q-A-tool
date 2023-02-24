// Questions Page

import { useContext, useEffect } from 'react';

import Button from '../components/button';
import Card from '../components/card';

import { Context } from '../context';

import { ReactComponent as CommentIcon } from '../assets/images/Comment.svg';

function Questions() {
  const {
    questions,
    setQuestions,
    answers,
    setAnswers,
    setPage,
    setCurrQuestionID,
  } = useContext(Context);

  useEffect(() => {
    if (setQuestions) {
      fetch('http://localhost:3004/questions')
        .then((res) => res.json())
        .then((res) => {
          setQuestions(res);
        });
    }
  }, [setQuestions]);

  useEffect(() => {
    if (setAnswers) {
      fetch('http://localhost:3004/answers')
        .then((res) => res.json())
        .then((res) => {
          setAnswers(res);
        });
    }
  }, [setAnswers]);

  return (
    <div className="flex-col-start gap-6">
      {questions?.map((q) => (
        <Card
          key={q?.id}
          imgURL={q?.['user-image']}
          title={q?.title}
          date={q?.timestamp}
          customElement={
            <div className="flex-between-center gap-2">
              <CommentIcon />
              <span className="grey-12">
                {new Intl.NumberFormat('fa-IR').format(
                  answers?.filter((a) => a?.questionID === q?.id)?.length ?? 0
                )}
              </span>
            </div>
          }
        >
          <div className="flex-col-start gap-4 w-full px-6 py-3">
            <div className="self-start black-14">{q?.description}</div>
            <Button
              className="self-end"
              variant="secondary"
              onClick={() => {
                setPage?.('Details');
                setCurrQuestionID?.(q?.id);
              }}
            >
              مشاهده جزئیات
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Questions;
