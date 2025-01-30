import Default from "@/components/view/cubipay/Default";
import Head from "next/head";

const CubiPay: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>CubiPay | Cubitech</title>
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

export default CubiPay;
