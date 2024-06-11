import { ActionFunction, redirect } from "@remix-run/node";
import client from "~/client";
import Create from "~/components/pages/Create";

export const action: ActionFunction = async ({ request }) => {
  // get form data
  const data = await request.formData();

  const newSurvey = await client.survey.create({
    data: {
      title: data.get("title")?.toString() || "default survey name",
    },
  });

  const questions = data.getAll("question");
  questions.forEach(async (question) => {
    await client.question.create({
      data: {
        question: question.toString(),
        surveyId: newSurvey.id,
      },
    });
  });

  return redirect("/");
};

const Page = () => {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
        height: "100vh",
      }}
    >
      <Create />
    </div>
  );
};

export default Page;
