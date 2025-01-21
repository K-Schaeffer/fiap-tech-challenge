import AccountHome from "@/components/pages/AccountHome/AccountHome";
import { FAccountButtonActions } from "components";
import Head from "next/head";
import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

export default function HomeView() {
  const router = useRouter();
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return <div>Loading...</div>;
  // }

  const actionsHome: FAccountButtonActions = {
    handleNewAccount: async () => {
      router.push("/dashboard");
    },
    handleLogin: async () => {
      router.push("/dashboard");
    },
  };

  return (
    <>
      <Head>
        <title>Bytebank | Landing Page</title>
        <meta name="description" content="By FIAP Tech Challenge" />
      </Head>
      <AccountHome actions={actionsHome} />
    </>
  );
}
