import React, { useContext, useState } from "react";
import { Avatar, Chip, Grid, Skeleton, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { WalletContext } from "../contexts/WalletContext";
import Collections from "../components/collections/Collections";
import AlertComponent from "../components/alert/AlertComponent";

import styles from "../components/user/user.module.css";

function TabPanel(props) {
  const { children, value, index } = props;

  return <div>{value === index && <h1>{children}</h1>}</div>;
}

const UserProfile = (props) => {
  const [userprofile] = useContext(WalletContext);

  const hiddenCoverFileInput = React.useRef(null);
  const hiddenAvtarFileInput = React.useRef(null);

  const [coverImage, setCoverImage] = useState();
  const [avtarImage, setAvtarImage] = useState();

  const [selectedTab, setselectedTab] = React.useState(0);

  const [openAlert, setOpenAlert] = React.useState(false);

  const handleTabs = (event, val) => {
    console.warn(val);
    setselectedTab(val);
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

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box className={styles.WsPcb}>
            <Box
              sx={{ height: "225px", cursor: "pointer" }}
              className={styles.dLltuv}
              onClick={handleCoverClick}
            >
              <Box class={styles.kMPTZo}>
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
          </Box>
          <Box className={styles.etqLOL}>
            <Box className={styles.AccountHeader}>
              <Avatar
                className={styles.AccountHeaderImage}
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
            <Box sx={{ mt: 3 }}>
              {
                userprofile.walletAddress 
                ?
                <Chip
                label={
                  userprofile.walletAddress.substring(0, 6) +
                  "...." +
                  userprofile.walletAddress.substring(userprofile.walletAddress.length - 4)
                }
                variant="outlined"
                color="warning"
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                onClick={onCopyWalletAddress}
              /> 
                :
                <Skeleton variant="text"  width={150} />
              }
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              borderColor: "divider",
              borderBottom: 1,
            }}
          >
            <Tabs value={selectedTab} onChange={handleTabs} centered>
              <Tab className={styles.tabContent} label="Created" />
              <Tab className={styles.tabContent} label="On Sale" />
            </Tabs>
          </Box>
          <TabPanel value={selectedTab} index={0}>
            <Box
              sx={{ flexGrow: 1, marginLeft: 5, marginRight: 5, marginTop: 5 }}
            >
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {Array.from(Array(1)).map((_, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Collections
                      sourceLink="https://lh3.googleusercontent.com/cy9zqvqCVy5aIYElN5UNLE-T82zxoQpy9oBc4N1SZga83fUVv7zMbFIZmpv7AFqM2EKgHk8_kcPIak4Bva2SVRCZSFqLY7a5iozVyTc=h600"
                      name="Squad Daily"
                      by="Louis Phellie"
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={selectedTab} index={1}>
            <Box
              sx={{ flexGrow: 1, marginLeft: 5, marginRight: 5, marginTop: 5 }}
            >
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {Array.from(Array(5)).map((_, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Collections
                      sourceLink="https://lh3.googleusercontent.com/cy9zqvqCVy5aIYElN5UNLE-T82zxoQpy9oBc4N1SZga83fUVv7zMbFIZmpv7AFqM2EKgHk8_kcPIak4Bva2SVRCZSFqLY7a5iozVyTc=h600"
                      name="Meta Mine"
                      by="knnknknn"
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </TabPanel>
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
};

export default UserProfile;
