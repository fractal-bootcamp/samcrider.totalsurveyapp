import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import client from "~/client";
import Home from "~/components/pages/Home";

// meta data
export const meta: MetaFunction = () => {
  return [{ title: "TOTAL SURVEY" }];
};

export const loader = async () => {
  const surveys = await client.survey.findMany();
  return { surveys };
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
        height: "100vh",
      }}
    >
      <Home surveys={data.surveys} />
    </div>
  );
}
