import React, { useEffect } from "react";

import {
  Box,
  Checkbox,
  MenuItem,
  Modal,
  Select,
  styled,
  Tooltip,
  tooltipClasses,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";

import styles from "./Makeofferfirstmodel.module.css";
import { FaEthereum } from "react-icons/fa";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LiComponent from "../makeoffer/LiComponent";

const style = {
  position: "relative",
  border: "1px solid rgb(229, 232, 235)",
  background: "rgb(255, 255, 255)",
  width: "650px",
  maxHeight: "calc(100vh - 0x)",
  maxWidth: "calc(100% - 32px)",
  borderRadius: "10px",
  marginTop: "0px",
  marginBottom: "0px",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -30%)",
};

const Makeofferfirstmodel = (props) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [expanded, setExpanded] = React.useState(false);

  const [checked, setChecked] = React.useState(false);

  const handleExpand = () => (event) => {
    setExpanded(!expanded);
  };

 

  const renderModel = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked == true) {
      setTimeout(() => {
        {
          if (props.isBuyNow) {
            
            props.openCheckoutModel();
          } else {
            
            props.openSecondModal();
          }
        }
        setChecked(false);
      }, 500);
    }
  };
  const [price, setPrice] = React.useState("");
  const [date, setDate] = React.useState("");

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      fontSize: 15,
      fontWeight: 600,
      padding: 10,
      borderRadius: 10,
      color: "blue",
    },
  }));

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <header className={styles.modelHeader}>
          <h4 className={styles.modelHeaderText}>{props.heading}</h4>
        </header>

        {props.isMakeOfferSecondModel ? (
          <section className={styles.modelSection}>
            <div className={styles.firstRowDiv}>
              <Typography
                sx={{ fontWeight: 600, fontSize: 18, marginBottom: "8px" }}
              >
                Price
              </Typography>

              <div className={styles.inputMain}>
                <div className={styles.inputMainDropdown}>
                  <Select
                    sx={{ borderColor: "transparent", margin: 0, padding: 0 }}
                    fullWidth
                    value={price}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <FaEthereum className={styles.ethereumIcon} /> ETH
                    </MenuItem>
                    <MenuItem value={10}>
                      <FaEthereum className={styles.ethereumIcon} />
                      WETH
                    </MenuItem>
                    <MenuItem value={20}>Polygon</MenuItem>
                  </Select>
                </div>

                <div className={styles.inputPrefix}></div>
                <input
                  type="text"
                  className={styles.input}
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

                <div className={styles.tableInputRightLabel}>
                  <Typography sx={{ marginRight: 1 }}>$0.00</Typography>
                </div>
              </div>
              <div className={styles.text}>
                <Typography sx={{ marginTop: 1 }}>
                  Available: 0.0000 ETH
                </Typography>
              </div>
            </div>

            <div className={styles.row}>
              <Typography
                sx={{ fontWeight: 600, fontSize: 18, marginBottom: "8px" }}
              >
                Offer Expiration
              </Typography>

              <div className={styles.expireInput}>
                <div className={styles.expireDropDown}>
                  <Select
                    sx={{ borderColor: "transparent", margin: 0, padding: 0 }}
                    fullWidth
                    value={date}
                    onChange={handleDateChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">1 Day</MenuItem>
                    <MenuItem value={10}>3 Days</MenuItem>
                    <MenuItem value={20}>7 Days</MenuItem>
                    <MenuItem value={30}>1 Month</MenuItem>
                    <MenuItem value={40}>Custom Date</MenuItem>
                  </Select>
                </div>
                <div className={styles.expireDate}>
                  <AccessTimeSharpIcon sx={{ margin: 1 }} />
                  <input
                    value={"18 : 05"}
                    disabled
                    className={styles.dateInput}
                  />
                </div>
              </div>
            </div>
            <div className={styles.checkBox}>
              <Checkbox {...label} />
              <Typography sx={{ fontSize: 17 }}>
                By checking this box, I agree to TF-MarketPlace Terms of Service
              </Typography>
            </div>
          </section>
        ) : (
          <section
            className={styles.modelSection}
            style={{ maxHeight: "500px", overflowY: "scrollbar" }}
          >
            <img
              src="https://static.opensea.io/review-collection.png"
              className={styles.img}
            />

            <div className={styles.imageText}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: 18,

                  color: "rgb(4, 17, 29)",
                }}
              >
                Review this information to ensure it’s what you want to buy.
              </Typography>
              <BootstrapTooltip
                title="Learn more about protecting yourself from scams here "
                arrow
                placement="top"
              >
                <InfoOutlinedIcon
                  sx={{
                    fontWeight: 500,
                    fontSize: 24,

                    color: "rgb(112, 122, 131)",
                    marginLeft: 1,
                    cursor: "pointer",
                  }}
                />
              </BootstrapTooltip>
            </div>

            <div className={styles.description}>
              <ul className={styles.ul}>
                <LiComponent
                  label="Collection name"
                  value="Azuki God"
                  href="/"
                />
                <LiComponent
                  label="Creator"
                  value=""
                  style={styles.liDescription}
                />
                <LiComponent
                  label="Total Sales"
                  value="301 Sales"
                  style={styles.liDescription}
                />
                <LiComponent
                  label="Total Volume"
                  mainValue="753"
                  subValue="($305,251.63)"
                  icon={<FaEthereum className={styles.etherIcon} />}
                />

                <LiComponent
                  label="Social Links"
                  value="Not specified"
                  style={styles.liDescription}
                />

                {expanded ? (
                  <>
                    <LiComponent
                      label="Contract Address"
                      value="0xb74b...bf46"
                      href="/"
                    />
                    <LiComponent
                      label="Total Items"
                      value="1,000 items"
                      style={styles.liDescription}
                    />
                    <LiComponent
                      label="Created Date"
                      value="20 days ago"
                      style={styles.liDescription}
                    />
                  </>
                ) : null}
              </ul>
              <button class={styles.btnShowMore} onClick={handleExpand()}>
                <p className={styles.p}>
                  {expanded ? "Show Less" : "Show More"}
                </p>
              </button>
            </div>
          </section>
        )}

        <footer
          className={styles.modelFooter}
          style={{ borderTop: "1px solid rgb(229, 232, 235)" }}
        >
          {props.isFooter ? (
            <>
              <button
                type="button"
                className={styles.modelFooterBtnSave}
                disabled
              >
                Make Offer
              </button>
              <button type="button" className={styles.modelSectionAddMore}>
                Add Funds
              </button>{" "}
            </>
          ) : (
            <div className={styles.checkBox}>
              <Checkbox
                {...label}
                onChange={renderModel}
                checked={checked}
              ></Checkbox>
              <Typography sx={{ fontSize: 17 }}>
                I understand that TF-MarketPlace has not reviewed this
                collection and blockchain transactions are irreversible.
              </Typography>
            </div>
          )}
        </footer>

        <button className={styles.modelBtnBack} onClick={props.openFirstModel}>
          {props.backicon}
        </button>

        <button className={styles.modelBtnClose} onClick={props.handleClose}>
          <CloseIcon sx={{ fontSize: "24px", color: "rgb(138, 147, 155)" }} />
        </button>
      </Box>
    </Modal>
  );
};

export default Makeofferfirstmodel;
