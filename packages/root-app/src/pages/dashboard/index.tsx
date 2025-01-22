import dynamic from "next/dynamic";
import Head from "next/head";

const DashboardApp = dynamic(() => import("dashboardApp/Index"), {
  ssr: false,
});

export default function RootViewDashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="By FIAP Tech Challenge" />
      </Head>
      <DashboardApp />
    </>
  );
}
