import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import type { Preview } from "@storybook/react";
import { dark, font, light } from "../src/theme/theme";

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
      <div className={font.variable}>
        <ThemeProvider theme={parameters.isDark ? dark : light}>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
};

export default preview;
