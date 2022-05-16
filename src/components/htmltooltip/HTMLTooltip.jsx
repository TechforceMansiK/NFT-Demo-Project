import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { Tooltip, tooltipClasses } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const CustomeHtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(4, 17, 29)",
    color: "rgb(255, 255, 255)",
    fontSize: "14px",
    maxWidth: "350px",
    transitionDuration: "300ms",
    borderRadius: "10px",
    fontWeight: 600,
    outline: "0px",
    transitionProperty: "transform, visibility, opacity",
    overflowWrap: "break-word",
    padding: "12px 20px",
    textAlign: "center",
  },
}));

export default function HtmlTooltip(props) {
  return (
    <CustomeHtmlTooltip
      title={
        <React.Fragment>
          <Typography color="inherit">{props.titleText}</Typography>
        </React.Fragment>
      }
    >
      <InfoOutlinedIcon sx={{ fontSize: props.fontSize }} />
    </CustomeHtmlTooltip>
  );
}
