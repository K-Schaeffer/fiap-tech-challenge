import { FilterList } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FFilter } from "./FFilter";

const meta = {
  title: "Molecules/FFilter",
  component: FFilter,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onFilterChange: (filterTypes: string[]) => {
      console.log("Selected filter types:", filterTypes);
    },
    showSelect: false,
  },
  render: (args) => {
    const [showSelect, setShowSelect] = useState(args.showSelect);

    const toggleSelectVisibility = () => {
      setShowSelect((prev) => !prev);
    };

    return (
      <Box sx={{ width: "300px" }}>
        <Stack direction="column" spacing={1}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton color="primary" onClick={toggleSelectVisibility}>
              <FilterList />
            </IconButton>
          </Box>

          {showSelect && (
            <FFilter
              {...args}
              showSelect={showSelect}
              onFilterChange={args.onFilterChange}
            />
          )}
        </Stack>
      </Box>
    );
  },
};
