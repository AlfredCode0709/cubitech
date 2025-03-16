import BuildingResilience from "@/components/about/BuildingResilience";
import CubitechStandards from "@/components/about/CubitechStandards";
import DevelopingCubitech from "@/components/about/DevelopingCubitech";
import MissionStatement from "@/components/common/MissionStatement";
import StartingBlock1 from "@/components/common/StartingBlock1";
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
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968314/cubitech_pv5rz0.ico"
        />
      </Head>
      <main>
        {/* Starting block of About Page */}
        <StartingBlock1
          backgroundImage={"/about/block1.png"}
          backgroundPosition={"center bottom"}
        >
          Journeying together, hand in hand
          <br />
          towards endless possibilities.
        </StartingBlock1>

        {/* Mission Statement */}
        <MissionStatement>
          Inspired by the Cubitech Vision, our mission is to simplify life
          through seamless integration of emerging technologies.
        </MissionStatement>

        {/* Developing Cubitech */}
        <DevelopingCubitech />

        {/* Building Resilience */}
        <BuildingResilience />

        {/* Cubitech Standards */}
        <CubitechStandards />
      </main>
    </Fragment>
  );
};

export default About;
