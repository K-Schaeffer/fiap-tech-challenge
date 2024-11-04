import { Grid2, Typography } from "@mui/material";
import styles from "./page.module.css";

import FButton from "@/components/atoms/FButton/FButton";
import Input from "@/components/atoms/FInput/FInput";
import SelectInput from "@/components/atoms/FSelectInput/FSelectInput";
import FAdvantageContainer from "@/components/organisms/FAdvantageContainer/FAdvantageContainer";
import FMenuDropdown from "@/components/organisms/FMenuDropdown/FMenuDropdown";

export default function Home() {
  return (
    <Grid2 container className={styles.page} spacing={2}>
      <main>
        <Typography variant="h1" color="primary">
          Foo
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          Foo
        </Typography>
        <FButton
          options={{ variant: "contained", color: "primary" }}
          innerText="Oi primario"
        />
        <FButton
          options={{ variant: "outlined", color: "primary" }}
          innerText="Oi outlined"
        />
        <SelectInput />
        <Input
          placeholder="00,00"
          textposition="center"
          borderColor="#004D61"
          maxWidth="200px"
        />
        <FMenuDropdown
          menuItems={[
            {
              label: "Início",
              path: "/",
              current: true,
            },
            {
              label: "Dashboard",
              path: "/dashboard",
            },
          ]}
        />
        <FAdvantageContainer />
      </main>
      <aside>
        <Typography variant="body1" color="primary">
          Foo
        </Typography>
        <Typography variant="caption" color="primary">
          Bar
        </Typography>
      </aside>
    </Grid2>
  );
}
