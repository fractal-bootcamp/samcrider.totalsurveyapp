import { Fields } from "./types";

const Component = ({ survey }: Fields) => {
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
      <div className="divider divider-secondary divider-start mx-10 mt-10 text-accent">
        {survey.title}
      </div>
      <div className="flex flex-row flex-wrap gap-10 items-start justify-center">
        {survey.questions.map((question, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-2xl font-bold text-center text-accent">
              {question.question}
            </div>
            <div className="flex flex-col items-start h-[100%] max-w-72 overflow-auto border-[1px] rounded-lg text-accent border-primary p-5">
              {question.answers.map((answer) => (
                <li key={answer.id}>{answer.answer}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
