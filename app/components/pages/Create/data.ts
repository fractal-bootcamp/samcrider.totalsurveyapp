import { useState } from "react";
import { Question } from "./types";

export const useCreatePageData = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

  const handleAddQuestion = () => {
    setQuestions((prev) => {
      return [
        ...prev,
        {
          type: "text",
          name: "question",
        },
      ];
    });
  };

  return {
    questions,
    handleAddQuestion,
    title,
    setTitle,
    question,
    setQuestion,
  };
};
