import CubiFoodDefault from "@/components/view/cubifood/CubiFoodDefault";
import Head from "next/head";

const CubiFood: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>CubiFood | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        <CubiFoodDefault />
      </main>
    </>
  );
};

export default CubiFood;
