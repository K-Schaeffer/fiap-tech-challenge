import AccountHome from "@/components/pages/AccountHome/AccountHome";
import { MENU_ITEMS_HOME } from "@/constants/menuItems";

export default async function HomeView() {
  const menuItems = MENU_ITEMS_HOME.map((item) => ({
    ...item,
    current: false,
  }));

  return <AccountHome menuItems={menuItems} />;
}
