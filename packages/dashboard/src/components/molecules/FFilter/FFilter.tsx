"use client"
import { TRANSACTION_TYPES } from "@/constants";
import { FormControl, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import { useState } from "react";


interface FFilterProps {
    onFilterChange: (filterTypes: string[]) => void;
    showSelect: Boolean;
}


export default function FFilter({ onFilterChange, showSelect }: FFilterProps) {

    const [filterSelected, setFilterSelected] = useState<string[]>([""]);

    const handleFilterChange = (event: SelectChangeEvent<typeof filterSelected>) => {
        const { target: { value } } = event;
        const selectedValues = typeof value === 'string' ? value.split(',') : value;

        if (!selectedValues.includes("")) {
            const updatedValues = selectedValues;
            setFilterSelected(updatedValues);
            onFilterChange(updatedValues);
        } else {
            setFilterSelected([""]);
            onFilterChange(TRANSACTION_TYPES);
        }
    };

    return (
        <Stack
            direction="row"
            justifyContent="right"
            alignItems="center"
            paddingBottom={1}
            maxWidth="100%"
        >


            {showSelect && (
                <FormControl>
                    <Select
                        multiple
                        value={filterSelected}
                        onChange={handleFilterChange}
                        displayEmpty
                        disableUnderline
                        style={{
                            minHeight: "40px",
                            minWidth: "100px",
                            overflow: "hidden",
                            borderRadius: 8,
                            backgroundColor: "#FFFFFF",
                        }}
                        sx={{
                            marginRight: 1,
                        }}
                    >
                        <MenuItem value="">Todos</MenuItem>
                        {TRANSACTION_TYPES.map((type) => {
                            return (
                                <MenuItem key={type} value={type}>
                                    {type}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            )}


        </Stack>

    )
}



