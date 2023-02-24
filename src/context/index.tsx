import { createContext, useState } from 'react';

import type { Dispatch } from 'react';

// data structure of Questions
export type questionType = {
  id: number;
  title: string;
  timestamp: string;
  'user-image': string;
  description: string;
  attachment?: string;
};

// data structure of Answers
export type answerType = {
  id: number;
  questionID: number;
  user: string;
  timestamp: string;
  'user-image': string;
  description: string;
  positive: number;
  negative: number;
};

type ContextProps = {
  currQuestionID: number;
  setCurrQuestionID: Dispatch<React.SetStateAction<number | undefined>>;
  page: string;
  setPage: Dispatch<React.SetStateAction<string>>;
  questions: Array<questionType>;
  setQuestions: Dispatch<React.SetStateAction<Array<questionType> | undefined>>;
  answers: Array<answerType>;
  setAnswers: Dispatch<React.SetStateAction<Array<answerType> | undefined>>;
};

const Context = createContext<Partial<ContextProps>>({});

function Provider(props: any) {
  // state for keeping current question ID
  const [currQuestionID, setCurrQuestionID] = useState<number | undefined>();

  // state for keeping page such as Home or Details
  const [page, setPage] = useState<string>('Home');

  // state for keeping all questions to prevent several requests to server
  const [questions, setQuestions] = useState<Array<questionType> | undefined>(
    undefined
  );

  // state for keeping all answers to prevent several requests to server
  const [answers, setAnswers] = useState<Array<answerType> | undefined>(
    undefined
  );

  return (
    <Context.Provider
      value={{
        page,
        setPage,
        currQuestionID,
        setCurrQuestionID,
        questions,
        setQuestions,
        answers,
        setAnswers,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, Provider };
