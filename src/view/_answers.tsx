import { memo, useContext, useEffect, useState } from 'react';

import Button from '../components/button';
import Card from '../components/card';

import { Context } from '../context';
import { BASE_API } from '../configs';

import { ReactComponent as HappyIcon } from '../assets/images/Happy.svg';
import { ReactComponent as SadIcon } from '../assets/images/Sad.svg';

import type { answerType } from '../context';

function Answers() {
  const { answers, currQuestionID } = useContext(Context);

  const [currentAnswers, setCurrentAnswers] = useState<Array<answerType>>();

  // set answers of current questions
  useEffect(() => {
    if (currQuestionID)
      setCurrentAnswers(
        answers?.filter((a) => a?.questionID === currQuestionID)
      );
  }, [answers, currQuestionID]);

  const givePoint = (
    id: number,
    pointType: 'positive' | 'negative',
    point: number
  ) => {
    fetch(`${BASE_API}/answers/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        [pointType]: point + 1,
      }),
    })
      .then((res) => res.json())
      .then((res: answerType) => {
        setCurrentAnswers?.((curr) => {
          const temp = [...(curr ?? [])];
          const currAnswer = temp.find((t) => t.id === id);
          if (currAnswer) currAnswer[pointType] = res[pointType];
          return temp;
        });
      });
  };

  return (
    <>
      {currentAnswers?.length ? (
        currentAnswers?.map((a) => (
          <Card
            key={a.id + a.questionID}
            imgURL={a['user-image']}
            title={a.user}
            date={a.timestamp}
            customElement={
              <div className="flex-between-center gap-3.5">
                <div className="flex-between-center gap-2">
                  <HappyIcon />
                  <span className="grey-12">
                    {/* Persian digits */}
                    {new Intl.NumberFormat('fa-IR').format(a.positive)}
                  </span>
                </div>
                <div className="flex-between-center gap-2">
                  <SadIcon />
                  <span className="grey-12">
                    {/* Persian digits */}
                    {new Intl.NumberFormat('fa-IR').format(a.negative)}
                  </span>
                </div>
              </div>
            }
          >
            <div className="flex-col-start gap-4 w-full px-6 py-3">
              <div className="self-start black-14">{a.description}</div>
              <div className="flex-end-center gap-5">
                <Button
                  variant="success"
                  onClick={givePoint.bind(null, a.id, 'positive', a.positive)}
                >
                  <div className="flex-between-center gap-3.5">
                    <HappyIcon />
                    <span>پاسخ خوب بود</span>
                  </div>
                </Button>
                <Button
                  variant="error"
                  onClick={givePoint.bind(null, a.id, 'negative', a.negative)}
                >
                  <div className="flex-between-center gap-3.5">
                    <SadIcon />
                    <span>پاسخ خوب نبود</span>
                  </div>
                </Button>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <div className="grey-12">پاسخی وجود ندارد</div>
      )}
    </>
  );
}

export default memo(Answers);
