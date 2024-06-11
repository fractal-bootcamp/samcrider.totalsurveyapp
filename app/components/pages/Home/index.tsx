import Component from "./component";
import { HomePageProps } from "./types";

const Home = ({ surveys }: HomePageProps) => {
  return <Component surveys={surveys} />;
};

export default Home;
