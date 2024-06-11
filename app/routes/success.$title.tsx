import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Success from "~/components/pages/Success";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  console.log(params);
  return { params };
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
      <Success survey={data.params} />
    </div>
  );
};

export default Page;
