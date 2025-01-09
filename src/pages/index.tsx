import IndexDefault from "@/components/view/IndexDefault";
import IndexLogged from "@/components/view/IndexLogged";
import { useUser } from "@auth0/nextjs-auth0/client";
import Head from "next/head";

const Index: React.FC<any> = () => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>{user ? <IndexLogged /> : <IndexDefault />}</main>
    </>
  );
};

export default Index;
