import WelcomeDialog from "@/components/index/WelcomeDialog";
import Default from "@/view/index/Default";
import Head from "next/head";
import { FC, Fragment } from "react";

const Index: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968314/cubitech_pv5rz0.ico"
        />
      </Head>
      <main>
        <WelcomeDialog />
        <Default />
      </main>
    </Fragment>
  );
};

export default Index;
