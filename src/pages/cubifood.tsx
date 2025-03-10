import _ from "@/view/cubifood/Default";
import Logged from "@/view/cubifood/Logged";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import { FC, Fragment } from "react";

const CubiFood: FC<any> = () => {
  const { user } = useUser();

  return (
    <Fragment>
      <Head>
        <title>CubiFood | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968423/cubifood_xnltgt.ico"
        />
      </Head>
      <main>
        {user ? <Logged /> : <_ />}
      </main>
    </Fragment>
  );
};

export default CubiFood;
