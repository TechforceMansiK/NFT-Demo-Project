import React from "react";
import { Box, Grid } from "@mui/material";
import HtmlTooltip from "../htmltooltip/HTMLTooltip";

import styles from "./createNFT.module.css";
import AddIcon from "@mui/icons-material/Add";

export default function AssetComponent(props) {
  return (
    <Grid
      container
      sx={{
        mt: "10px",
        borderBottom: "1px solid rgb(229, 232, 235)",
      }}
      spacing={2}
    >
      <Grid item>{props.icon}</Grid>
      <Grid item>
        <span className={styles.assetFormLabel}>{props.title}</span>
        <p>
          {props.subTitle}
          {props.tooltip && (
            <span className={styles.infoIcon}>
              <HtmlTooltip titleText={props.tooltip} fontSize={20} />
            </span>
          )}
        </p>
      </Grid>
      <Box sx={{ flexGrow: 1 }} />
      <Grid item>
        {props.button ? (
          props.button
        ) : (
          <button className={styles.addButton} onClick={props.onClick}>
            <AddIcon sx={{ fontSize: "24px" }} />
          </button>
        )}
      </Grid>
    </Grid>
  );
}
