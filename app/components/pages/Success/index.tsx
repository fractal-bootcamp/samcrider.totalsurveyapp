import Component from "./component";
import { SuccessPageProps } from "./types";

const Success = ({ survey }: SuccessPageProps) => {
  return <Component survey={survey} />;
};

export default Success;
