import { CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";


export default function Buy(props) {
  return (
    <div>
      <CardContent className={props.cardClass}>
        <div className={props.divClass}>
          <Typography className={props.typoClass} marginTop={props.marginTopValue} marginBottom={props.marginBottomValue}>
          <CardMedia className={props.mediaClass} component="img" image={props.img1} ></CardMedia>
            <b>{props.name} </b>
            </Typography>
          <Typography className={props.typograClass} marginLeft={props.marginLeftValue}>
            {props.value}
            {props.valueSub}
              <Typography className={props.typograaClass}>
                 {props.valueB}
              </Typography>
          </Typography>
          <Typography className={props.typographyClass}>
            {props.symbol}
            {props.amount}
            <Typography className={props.typographyyClass}>
             {props.valueC}
            </Typography>
          </Typography>
        </div>
      </CardContent>
    </div>
  );
}
