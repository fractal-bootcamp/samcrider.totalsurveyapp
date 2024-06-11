type Answer = {
  id: string;
  answer: string;
  questionId: string | null;
};

export type QuestionsWithAnswers = {
  question: string;
  answers: Answer[];
};

export type ResultsPageProps = {
  survey: { title: string; questions: QuestionsWithAnswers[] };
};

export type Fields = {
  survey: { title: string; questions: QuestionsWithAnswers[] };
};
