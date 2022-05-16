import React from "react";
import { styled } from "@mui/material/styles";

import { InputBase, NativeSelect } from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "none",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 0,
      borderColor: "none",
      boxShadow: "none",
    },
  },
}));

export default function NativeSelectInput(props) {
  return (
    <NativeSelect
      id="props.id"
      {...props.value}
      {...props.handleChange}
      input={<BootstrapInput />}
    >
      {props.options &&
        props.options.map((option, index) => (
          <option key={index} value={option.key}>{option.label}</option>
        ))}
    </NativeSelect>
  );
}
