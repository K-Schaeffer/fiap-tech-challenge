import { AccountHome } from "@/components/pages/AccountHome/AccountHome";
import { MENU_ITEMS_HOME } from "@/components/pages/AccountHome/AccountHome.constants";
import { FAccountButtonActions } from "components";
import { redirect } from "next/navigation";

export default function HomeView() {
  const menuItems = MENU_ITEMS_HOME.map((item) => ({
    ...item,
    current: false,
  }));

  const currentPath = "";

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

  return (
    <AccountHome
      actions={actionsHome}
      menuItems={menuItems}
      currentPath={currentPath}
    />
  );
}
