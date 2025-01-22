"use client";
import { NotFound } from "components";
import { useRouter } from "next/navigation";

export default function NotFoundView() {
  const router = useRouter();

  const redirectToHome = () => {
    router.push("/");
  };

  return <NotFound onBack={redirectToHome} />;
}
