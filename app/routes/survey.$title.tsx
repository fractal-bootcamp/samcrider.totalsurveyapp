import { ActionFunction, LoaderFunctionArgs } from "@remix-run/node";
import { redirect, useLoaderData } from "@remix-run/react";
import client from "~/client";
import Survey from "~/components/pages/Survey";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const selectedSurvey = await client.survey.findUniqueOrThrow({
    where: {
      title: params.title,
    },
  });

  const questions = await client.question.findMany({
    where: {
      surveyId: selectedSurvey.id,
    },
  });

  const surveyWithQuestions = {
    title: selectedSurvey.title,
    questions: questions,
  };
  return { surveyWithQuestions };
};

export const action: ActionFunction = async ({ request, params }) => {
  const selectedSurvey = await client.survey.findUniqueOrThrow({
    where: {
      title: params.title,
    },
  });

  const questions = await client.question.findMany({
    where: {
      surveyId: selectedSurvey.id,
    },
  });

  const surveyWithQuestions = {
    title: selectedSurvey.title,
    questions: questions,
  };
  const data = await request.formData();

  try {
    surveyWithQuestions.questions.forEach(async (question) => {
      await client.answer.create({
        data: {
          answer: data.get(question.question)?.toString() || "default answer",
          questionId: question.id,
        },
      });
    });
  } catch (e) {
    return console.error(e);
  }

  return redirect(`/success/${surveyWithQuestions.title}`);
};

const Page = () => {
  const data = useLoaderData<typeof loader>();

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
        height: "100vh",
      }}
    >
      <Survey survey={data.surveyWithQuestions} />
    </div>
  );
};
export default Page;
