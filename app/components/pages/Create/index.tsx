import Component from "./component";
import { useCreatePageData } from "./data";

const Create = () => {
  const {
    handleAddQuestion,
    questions,
    title,
    setTitle,
    question,
    setQuestion,
  } = useCreatePageData();

  return (
    <Component
      onClick={handleAddQuestion}
      questions={questions}
      title={title}
      setTitle={setTitle}
      question={question}
      setQuestion={setQuestion}
    />
  );
};

export default Create;
