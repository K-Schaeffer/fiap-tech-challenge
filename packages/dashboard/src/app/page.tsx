import AccountHome from "@/components/pages/AccountHome/AccountHome";
import { FAccountButtonActions } from "components";
import { redirect } from "next/navigation";

export default function HomeView() {
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

  return <AccountHome actions={actionsHome} />;
}
