import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import type { Preview } from "@storybook/react";
import { dark, light } from "components/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, { parameters }) => (
      // <div className={font.variable}> Temp because storybook will not exist for this project in the future
      <ThemeProvider theme={parameters.isDark ? dark : light}>
        <Story />
      </ThemeProvider>
      // </div>
    ),
  ],
};

export default preview;
