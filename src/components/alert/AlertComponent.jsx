import React from "react";
import { Grow, Slide } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

function GrowTransition(props) {
  return <Grow {...props} />;
}

const AlertComponent = (props) => {
  return (
    <>
      <Snackbar
        anchorOrigin={props.position}
        open={props.open}
        autoHideDuration={props.duration}
        onClose={props.onClose}
        TransitionComponent={
          props.transition === "grow"
            ? GrowTransition
            : props.transition === "left"
            ? TransitionLeft
            : props.transition === "down"
            ? TransitionDown
            : props.transition === "right"
            ? TransitionRight
            : TransitionUp
        }
      >
        <Alert
          onClose={props.onClose}
          severity={props.color}
          sx={{ width: "100%" }}
        >
          {props.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertComponent;
