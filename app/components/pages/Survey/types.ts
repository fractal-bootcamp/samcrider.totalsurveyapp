type Question = {
  id: string;
  question: string;
  surveyId: string | null;
};

type Survey = {
  title: string;
  questions: Question[];
};

export type SurveyPageProps = {
  survey: Survey;
};

export type Fields = {
  survey: Survey;
  answers: string[];
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
};
