import Default from "@/components/view/cubiperk/Default";
import Head from "next/head";

const CubiPerk: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>CubiPerk | Cubitech</title>
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

export default CubiPerk;
