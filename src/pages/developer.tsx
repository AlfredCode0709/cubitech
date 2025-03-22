import DeveloperView from "@/view/dev/DeveloperView";
import Head from "next/head";
import { FC, Fragment } from "react";

const Developer: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Developer Portal | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968314/cubitech_pv5rz0.ico"
        />
      </Head>
      <main>
        <DeveloperView />
      </main>
    </Fragment>
  );
};

export default Developer;
