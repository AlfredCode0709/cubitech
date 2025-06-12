import Error404 from "@/views/error404/Error404";
import Head from "next/head";
import { FC, Fragment } from "react";

const Page: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>404 | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://ik.imagekit.io/a1fr3d10/cubitech.ico?updatedAt=1748148047180"
        />
      </Head>
      <main>
        <Error404 />
      </main>
    </Fragment>
  );
};

export default Page;
