import { Fields } from "./types";

const Component = ({ survey }: Fields) => {
  console.log("IN SUCCESS COMPONENT", survey);
  return (
    <div className="flex flex-col items-center gap-10 p-10 h-[100%]">
      <a href="/" className="text-4xl font-bold uppercase w-[100%] text-accent">
        Total Survey
      </a>
      <div className="flex flex-row justify-evenly">
        <div className="w-[50%] text-accent text-md">
          Do you like surveys? If you do, you've come to the right place.
          Wondering what to do now that you're here? Take or Create baby!
        </div>
        <a className="btn btn-warning" href="/">
          Go Home
        </a>
      </div>
      <div className="divider divider-secondary text-accent divider-start mx-10 mt-10">
        {survey.title}
      </div>
      <div className="text-2xl font-bold text-accent">
        Your Survey Response Has Been Recorded!
      </div>
      <a href={`/results/${survey.title}`} className="btn btn-neutral">
        View Survey Results
      </a>
    </div>
  );
};

export default Component;
