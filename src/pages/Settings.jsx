import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  Chip,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Skeleton,
  Typography,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import styles from "../components/user/settings/settings.module.css";
import InputComponent from "../components/createNFT/InputComponent";
import { WalletContext } from "../contexts/WalletContext";
import AlertComponent from "../components/alert/AlertComponent";
import HtmlTooltip from "../components/htmltooltip/HTMLTooltip";

export default function Settings(props) {
  const [userprofile, setUserprofile] = useContext(WalletContext);

  const hiddenCoverFileInput = React.useRef(null);
  const hiddenAvtarFileInput = React.useRef(null);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [coverImage, setCoverImage] = useState();
  const [avtarImage, setAvtarImage] = useState();

  const username = useFormInput(userprofile.username);
  const email = useFormInput(userprofile.email);
  const bio = useFormInput(userprofile.bio);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const handleCoverClick = (event) => {
    hiddenCoverFileInput.current.click();
  };

  const handleAvtarClick = (event) => {
    hiddenAvtarFileInput.current.click();
  };

  const onCoverImageChange = (event) => {
    const fileUploaded = event.target.files[0];
    setCoverImage(URL.createObjectURL(event.target.files[0]));
    props.handleFile(fileUploaded);
  };

  const onAvtarImageChange = (event) => {
    const fileUploaded = event.target.files[0];
    setAvtarImage(URL.createObjectURL(event.target.files[0]));
    props.handleFile(fileUploaded);
  };

  const onCopyWalletAddress = () => {
    navigator.clipboard.writeText(userprofile.walletAddress);
    setOpenAlert(true);
  };

  const getTooltipText = (...text) => {
    return (
      <>
        {text.map((line) => (
          <>
            {line}
            <br />
          </>
        ))}
      </>
    );
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box className={styles.kByGvJ}>
            <List
              sx={{ width: "100%" }}
              component="nav"
              aria-label="main mailbox folders"
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{
                    fontWeight: "700",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "rgb(112, 122, 131)",
                  }}
                >
                  Settings
                </ListSubheader>
              }
            >
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <NotificationsIcon />
                </ListItemIcon>
                <ListItemText primary="Notifications" />
              </ListItemButton>
            </List>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ margin: "28px 52px 0px" }}>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <header>
                    <h1 className={styles.header}>Profile Settings</h1>
                  </header>
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
            </Box>
            <Box>
              {userprofile.walletAddress ? (
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <InputComponent
                      label="Username"
                      type="text"
                      id="txtUsername"
                      name="txtusername"
                      placeholder="Username"
                      {...username}
                      required={true}
                      prefix={true}
                    />

                    <InputComponent
                      sx={{ mt: "20px" }}
                      label="Bio"
                      type="textarea"
                      id="txtaBio"
                      name="txtaBio"
                      placeholder="Tell the world your stroy!"
                      {...bio}
                      prefix={false}
                      rows="2"
                    />

                    <InputComponent
                      sx={{ mt: "20px" }}
                      label="Email Address"
                      type="text"
                      id="txtEmailAddress"
                      name="txtEmailAddress"
                      placeholder="Enter Email"
                      {...email}
                      required={true}
                      prefix={true}
                    />

                    {userprofile.walletAddress && (
                      <>
                        {" "}
                        <label
                          htmlFor="walletAddress"
                          className={styles.mediaLable}
                        >
                          Wallet Address
                        </label>
                        <Chip
                          label={userprofile.walletAddress}
                          variant="filled"
                          color="default"
                          sx={{
                            marginTop: "10px",
                            fontSize: "14px",
                          }}
                          onClick={onCopyWalletAddress}
                          clickable
                        />
                      </>
                    )}

                    <Box sx={{ mt: "30px" }}>
                      <Button variant="contained" size="large">
                        Save
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={5}>
                    <Box>
                      <label
                        htmlFor="walletAddress"
                        className={styles.mediaLable}
                      >
                        Profile Image &nbsp;
                        <HtmlTooltip
                          titleText={getTooltipText(
                            "Recommended 350px X 350px",
                            "Max Size: 100MB"
                          )}
                          fontSize={20}
                        />
                      </label>
                    </Box>
                    <Box>
                      <Avatar
                        className={styles.profileImage}
                        alt="Remy Sharp"
                        src={
                          avtarImage
                            ? avtarImage
                            : process.env.PUBLIC_URL + "/images/dummy-avtar.png"
                        }
                        onClick={handleAvtarClick}
                      />

                      <input
                        type="file"
                        ref={hiddenAvtarFileInput}
                        onChange={onAvtarImageChange}
                        id="media"
                        name="media"
                        accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
                        style={{ display: "none" }}
                        autoComplete="off"
                        tabIndex="-1"
                      />
                    </Box>
                    <Box>
                      <label
                        htmlFor="walletAddress"
                        className={styles.mediaLable}
                      >
                        Profile Banner &nbsp;
                        <HtmlTooltip
                          titleText={getTooltipText(
                            "Recommended 1400px X 400px",
                            "Max Size: 100MB"
                          )}
                          fontSize={20}
                        />
                      </label>
                    </Box>
                    <Box>
                      <Box class={styles.coverImage} onClick={handleCoverClick}>
                        <input
                          type="file"
                          ref={hiddenCoverFileInput}
                          onChange={onCoverImageChange}
                          id="media"
                          name="media"
                          accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
                          style={{ display: "none" }}
                          autoComplete="off"
                          tabIndex="-1"
                        />
                        {coverImage && (
                          <img
                            id="target"
                            alt="Banner Preview"
                            src={coverImage}
                            style={{ objectFit: "cover" }}
                            className={styles.image}
                          />
                        )}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              ) : (
                <Skeleton variant="rectangular" height={500} />
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <AlertComponent
        position={{ vertical: "top", horizontal: "center" }}
        open={openAlert}
        duration={5000}
        onClose={handleClose}
        transition="down"
        color="success"
        message="Address Copied!"
      />
    </>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};
