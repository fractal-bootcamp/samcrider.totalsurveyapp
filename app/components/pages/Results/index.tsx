import Component from "./component";
import { ResultsPageProps } from "./types";

const Results = ({ survey }: ResultsPageProps) => {
  return <Component survey={survey} />;
};

export default Results;
