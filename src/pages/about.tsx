import AboutView from "@/views/about/AboutView";
import Head from "next/head";
import { FC, Fragment } from "react";

const About: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>About Us | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://ik.imagekit.io/a1fr3d10/cubitech.ico?updatedAt=1748148047180"
        />
      </Head>
      <main>
        <AboutView />
      </main>
    </Fragment>
  );
};

export default About;
