import Head from "next/head";

const Page: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>Page</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main></main>
    </>
  );
};

export default Page;
