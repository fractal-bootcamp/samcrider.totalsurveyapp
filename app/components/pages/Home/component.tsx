import { Fields } from "./types";

const Component = ({ surveys }: Fields) => {
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
        <a className="btn btn-warning" href="/create">
          Create a Survey
        </a>
      </div>

      <div className="divider divider-secondary text-accent divider-start mx-10 mt-10">
        Surveys
      </div>

      <div className="flex flex-row gap-10 justify-center flex-wrap p-10 pt-0 overflow-auto">
        {surveys.map((survey, i) => (
          <div className="card w-96 bg-primary shadow-xl" key={i}>
            <div className="card-body ">
              <h2 className="card-title text-accent ">{survey.title}</h2>
              <div className="card-actions justify-end">
                <a className="btn btn-accent" href={`/survey/${survey.title}`}>
                  take it
                </a>

                <a className="btn btn-accent" href={`/results/${survey.title}`}>
                  view results
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
