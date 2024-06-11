export type Question = {
  type: string;
  name: string;
};

export type IsFilledOut = {
  title?: boolean;
  question?: boolean;
};

export type Fields = {
  onClick: () => void;
  questions: Question[];
  question: string;
  title: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};
