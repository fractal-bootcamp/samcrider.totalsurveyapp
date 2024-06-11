import { useState } from "react";

export const useSurveyPageData = () => {
  const [answers, setAnswers] = useState<string[]>([]);

  return {
    answers,
    setAnswers,
  };
};
