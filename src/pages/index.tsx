import Default from "@/components/view/index/Default";
import Head from "next/head";
import { FC } from "react";

const Index: FC<any> = () => {
  return (
    <>
      <Head>
        <title>Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        <Default />
      </main>
    </>
  );
};

export default Index;
