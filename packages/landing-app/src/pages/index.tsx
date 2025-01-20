import AccountHome from "@/components/pages/AccountHome/AccountHome";
import { MENU_ITEMS } from "@/constants/menuItems";
import { FAccountButtonActions, FMenuListItem } from "components";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const menuItems = MENU_ITEMS.map((item) => ({
    ...item,
    current: false,
  }));

  return {
    props: {
      menuItems,
    },
  };
};

interface HomeProps {
  menuItems: FMenuListItem[];
}

export default function HomeView({ menuItems }: HomeProps) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

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
        <title>Bytebank</title>
        <meta name="description" content="By FIAP Tech Challenge" />
      </Head>
      <AccountHome actions={actionsHome} menuItems={menuItems} />
    </>
  );
}
