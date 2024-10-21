
import React from 'react';

import type { Preview } from "@storybook/react";
import { ThemeProvider } from '@mui/material/styles';
import { light, dark } from '../src/theme/theme';
import { font } from '../src/app/layout';

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
  ]
};

export default preview;
