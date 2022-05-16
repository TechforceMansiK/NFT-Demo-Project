import React from "react";

import { useSwitch } from "@mui/base";
import clsx from "clsx";
import { styled } from "@mui/material/styles";

const blue = {
  500: "#007FFF",
};

const grey = {
  400: "#BFC7CF",
  500: "#AAB4BE",
  600: "#6F7E8C",
};

const BasicSwitchRoot = styled("span")(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  margin: 10px;
  background: ${theme.palette.mode === "dark" ? grey[600] : grey[400]};
  border-radius: 100px;
  cursor: pointer;

  &.Switch-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.Switch-checked {
    background: ${blue[500]};
  }
  `
);

const BasicSwitchInput = styled("input")`
  cursor: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
`;

const BasicSwitchThumb = styled("span")`
  display: block;
  width: 14px;
  height: 14px;
  top: 5px;
  left: 5px;
  border-radius: 16px;
  background-color: #fff;
  position: relative;
  transition: all 200ms ease;

  &.Switch-focusVisible {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.Switch-checked {
    left: 28px;
    top: 5px;
    background-color: #fff;
  }
`;

export default function BasicSwitch(props) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    "Switch-checked": checked,
    "Switch-disabled": disabled,
    "Switch-focusVisible": focusVisible,
  };

  return (
    <BasicSwitchRoot className={clsx(stateClasses)}>
      <BasicSwitchThumb className={clsx(stateClasses)} />
      <BasicSwitchInput {...getInputProps()} aria-label="Demo switch" />
    </BasicSwitchRoot>
  );
}
