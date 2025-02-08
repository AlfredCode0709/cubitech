import Head from "next/head";
import { FC } from "react";

const Page: FC<any> = () => {
  return (
    <>
      <Head>
        <title>Page | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main></main>
    </>
  );
};

export default Page
