"use client";
import { FAccountButtonActions } from "@/components/molecules/FAccountButtons/FAccountButtons";
import AccountHome from "@/components/pages/AccountHome/AccountHome";
import { useRouter } from "next/navigation";

export default function HomeView() {
  const router = useRouter();

  const actionsHome: FAccountButtonActions = {
    handleNewAccount: () => router.push("/dashboard"),
    handleLogin: () => router.push("/dashboard"),
  };

  return <AccountHome actions={actionsHome} />;
}
