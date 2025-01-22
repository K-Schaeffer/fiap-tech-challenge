import { AccountCircle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { FHeader, FMenuDropdown } from "components";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const DashboardApp = dynamic(() => import("dashboardApp/Index"), {
  ssr: false,
});

interface AccountUpdatedEvent extends Event {
  detail: string;
}

export default function RootViewDashboard() {
  const fullName: string = "";

  const [updatedName, setUpdatedName] = useState(fullName);

  useEffect(() => {
    document.addEventListener(
      "dashboardApp: accountUpdated",
      (event: Event) => {
        const accountUpdatedEvent = event as AccountUpdatedEvent;
        setUpdatedName(accountUpdatedEvent.detail);
      }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="By FIAP Tech Challenge" />
      </Head>
      <FHeader
        leftContent={
          <Box>
            <FMenuDropdown
              options={{ sx: { display: { xs: "flex", lg: "none" } } }}
            >
              <Link href="" />
            </FMenuDropdown>
          </Box>
        }
        rightContent={
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="body1">{updatedName}</Typography>
            <Link href={"/profile"} style={{ display: "flex" }}>
              <AccountCircle color="secondary" sx={{ fontSize: 40 }} />
            </Link>
          </Box>
        }
      />
      <DashboardApp />
    </>
  );
}
