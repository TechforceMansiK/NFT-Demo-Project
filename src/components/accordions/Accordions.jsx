import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import styles from "./Accordions.module.css";
import { Link } from "react-router-dom";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: "10px",
  border: "1px solid rgb(229, 232, 235)",
  borderImage: "initial",
  color: "rgb(4, 17, 29)",
  backgroundColor: "rgb(255, 255, 255)",
  overflow: "hidden",
  "& div": {
    backgroundColor: "rgb(255, 255, 255)",
  },
  "&:not(:last-child)": {
    // borderBottom: 0,
  },
  "&:last-child": {
    marginTop: "12px",
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Accordions() {
  return (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
            What is Minting?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Minting is an action that brings an item into existence on the
            blockchain, and costs gas to do so. Minting using OpenSea’s tools is
            &nbsp;<em>lazy</em>, meaning it only occurs when necessary:
            <ol className="pt-3">
              <li>When you transfer an item to another account</li>
              <li>When someone buys an item from you</li>
            </ol>
          </Typography>
          <Typography>
            {" "}
            This means that you can create as much as you want here &nbsp;
            <em>for free</em>.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
            How are limits enforced?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The maximum supply ("hard cap") of your NFT will be encoded in its
            ID. This allows the smart contract to check whether any more are
            allowed to be minted.{" "}
            <Link
              className={styles.markdownLink}
              to="/faq#max-supply"
              rel="nofollow noopener"
              target="_blank"
            >
              {" "}
              Learn more here.{" "}
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
