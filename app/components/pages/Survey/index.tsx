import Component from "./component";
import { useSurveyPageData } from "./data";
import { SurveyPageProps } from "./types";

const Survey = ({ survey }: SurveyPageProps) => {
  const { answers, setAnswers } = useSurveyPageData();
  return (
    <Component survey={survey} answers={answers} setAnswers={setAnswers} />
  );
};

export default Survey;
