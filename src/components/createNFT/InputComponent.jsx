import React from "react";
import { Autocomplete, Box, FormControl, Grid, TextField } from "@mui/material";
import HtmlTooltip from "../htmltooltip/HTMLTooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import styles from "./createNFT.module.css";
import NativeSelectInput from "../nativeselect/NativeSelect";

export default function InputComponent(props) {
  return (
    <Grid item {...props.sx}>
      <Box>
        <label htmlFor={props.label} className={styles.mediaLable}>
          {props.label} {props.required && <font color="red">*</font>}
        </label>
        {props.labelTooltip && (
          <div className={styles.infoIcon}>
            <HtmlTooltip titleText={props.labelTooltip} fontSize={24} />
          </div>
        )}
      </Box>
      {props.subText && (
        <Box>
          <span className={styles.subText}>{props.subText}</span>
          {props.subTextToolTip && (
            <div className={styles.infoIcon}>
              <HtmlTooltip titleText={props.subTextToolTip} fontSize={20} />
            </div>
          )}

          {props.subTextToolTipIcon && (
            <div className={styles.infoIcon} onClick={props.onClick}>
              <InfoOutlinedIcon sx={{ fontSize: 20 }} />
            </div>
          )}
        </Box>
      )}
      <div className={styles.inputMain}>
        {props.prefix && <div className={styles.inputPrefix}></div>}

        {props.type === "text" ? (
          <input
            type={props.type}
            className={styles.input}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            required=""
            spellCheck="false"
            disabled={props.disabled}
            {...props.value}
            {...props.handleChange}
          />
        ) : null}

        {props.type === "textarea" ? (
          <textarea
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            rows={props.rows ? props.rows : "4"}
            className={styles.textArea}
            spellCheck="false"
            {...props.value}
            {...props.handleChange}
          ></textarea>
        ) : null}

        {props.type === "autocomplete" ? (
          <Autocomplete
            clearOnEscape
            id="combo-box-demo"
            options={props.options}
            sx={{
              width: "100%",
            }}
            renderInput={(params) => <TextField {...params} label="" />}
          />
        ) : null}

        {props.type === "nativeselect" ? (
          <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
            <NativeSelectInput
              id="props.id"
              {...props.value}
              {...props.handleChange}
              options={props.options}
            />
          </FormControl>
        ) : null}
      </div>
    </Grid>
  );
}
