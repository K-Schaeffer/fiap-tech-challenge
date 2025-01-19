import AccountHome from "@/components/pages/AccountHome/AccountHome";
import { MENU_ITEMS_HOME } from "@/constants/menuItems";
import { FAccountButtonActions } from "components";
import { redirect } from "next/navigation";

export default async function HomeView() {
  const menuItems = MENU_ITEMS_HOME.map((item) => ({
    ...item,
    current: false,
  }));

  const actionsHome: FAccountButtonActions = {
    handleNewAccount: async () => {
      "use server";
      redirect("/dashboard");
    },
    handleLogin: async () => {
      "use server";
      redirect("/dashboard");
    },
  };

  return <AccountHome actions={actionsHome} menuItems={menuItems} />;
}
