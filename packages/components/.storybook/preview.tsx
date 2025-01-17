import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import type { Preview } from "@storybook/react";
import { dark, light } from "../src/theme/";

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
      <ThemeProvider theme={parameters.isDark ? dark : light}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
