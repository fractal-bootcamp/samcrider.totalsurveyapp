import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import client from "~/client";
import Results from "~/components/pages/Results";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const selectedSurvey = await client.survey.findUniqueOrThrow({
    where: {
      title: params.title,
    },
    include: {
      questions: {
        include: {
          answers: true,
        },
      },
    },
  });

  return { selectedSurvey };
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
      <Results survey={data.selectedSurvey} />
    </div>
  );
};
export default Page;
