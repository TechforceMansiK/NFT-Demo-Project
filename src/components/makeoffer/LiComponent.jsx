import React from "react";
import styles from "../model/Makeofferfirstmodel.module.css";
import { Typography } from "@mui/material";

export default function LiComponent(props) {
  return (
    <>
      <li className={styles.li}>
        <div className={styles.liDiv}>
          <span className={styles.liHeader}>{props.label} </span>
          <div className={styles.DivInsideli}>
            {props.href && (
              <span className={styles.liDescription}>
                <a href={props.href}>{props.value}</a>
              </span>
            )}
            {props.icon && (
              <span className={styles.iconDescription}>
                {props.icon}
                {props.mainValue}
                <Typography sx={{ marginLeft: 1 }}>{props.subValue}</Typography>
              </span>
            )}
            {!props.icon && !props.href && (
              <span className={props.style}>{props.value}</span>
            )}
          </div>
        </div>
      </li>
    </>
  );
}
