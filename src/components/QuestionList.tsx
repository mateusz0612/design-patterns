import React from "react";
import useFetch from "../Facade/useFetch";

interface QuestionProps {
  difficulty: string;
  question: string;
}

interface Response {
  results: QuestionProps[];
}

const QuestionList: React.FC = () => {
  const {
    data: { results },
    isLoading,
    isError,
  } = useFetch<Response>("https://opentdb.com/api.php?amount=10");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <div className="App">
      <h1>
        Facade pattern with React Hooks, using useFetch to get questions from
        opentdb API
      </h1>
      {results.map(({ question, difficulty }) => (
        <p>
          Difficulty: {difficulty}, Question: {question}
        </p>
      ))}
    </div>
  );
};

export default QuestionList;
