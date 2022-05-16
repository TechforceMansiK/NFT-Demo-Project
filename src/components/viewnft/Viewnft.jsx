import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
  Badge, styled
} from "@mui/material";
import React, { useState } from "react";
import styles from "./Viewnft.module.css";
import { FaEthereum } from "react-icons/fa";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LabelIcon from "@mui/icons-material/Label";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BallotIcon from "@mui/icons-material/Ballot";
import SubjectIcon from "@mui/icons-material/Subject";
import clsx from "clsx";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CheckIcon from '@mui/icons-material/Check';
import BuyNowCover from "../buyNow/BuyNowCover";
import Makeofferfirstmodel from "../model/Makeofferfirstmodel";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useNavigate, useLocation } from "react-router-dom";
import { WalletContext } from "../../contexts/WalletContext";
import API from "../../api/OpenseaApi";

function Viewnft() {
  const [like, setLike] = React.useState(0);
  const [asset, setAsset] = React.useState([]);
  const [assetContract, setAssetContract] = React.useState([]);
  const [value, setValue] = React.useState(0);
  const [isBusy, setBusy] = React.useState(true)
  const location = useLocation();

  const contractAddress = location.state.contractAddress;
  const token_id = location.state.token_id;

  // const url = "https://testnets-api.opensea.io/api/v1/asset/0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656/19455982571415100823997776016802369803065083267627984950236292081328555294721/"

  React.useEffect(() => {
    setBusy(true);
    const url = `${process.env.REACT_APP_OPENSEA_BASE_URL}${process.env.REACT_APP_FETCH_OPENSEA_ASSET}/${contractAddress}/${token_id}`;
    console.log("asset url===================", url)
    API.get(url).then((response) => {
      setAsset(response.data);
      setAssetContract(response.data.asset_contract)
      setBusy(false);
    });
  }, []);

  console.log("out ===", asset);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 10,
      top: 40,
      position: "absolute",
      background: "#c42513",
      borderRadius: 50,
      color: "white",
      height: 20,
      width: 20
    },
  }));

  let navigate = useNavigate();

  const [openMakeOfferModel, setOpenMakeOfferModel] = React.useState(false);
  const handleOpenMakeOfferModel = () => setOpenMakeOfferModel(true);
  const handleCloseMakeOfferModel = () => setOpenMakeOfferModel(false);


  const [openMakeOfferFirstModel, setOpenMakeOfferFirstModel] = React.useState(false);
  const [openMakeOfferSecondModel, setOpenMakeOfferSecondModel] = React.useState(false);
  const handleOpenMakeOfferFirstModel = () => setOpenMakeOfferFirstModel(true);
  const handleOpenMakeOfferSecondModel = () => setOpenMakeOfferSecondModel(true);
  const handleCloseMakeOfferFirstModel = () => setOpenMakeOfferFirstModel(false);
  const handleCloseMakeOfferSecondModel = () => setOpenMakeOfferSecondModel(false);

  const [openBuyNowModel, setOpenBuyNowModel] = React.useState(false);
  const handleOpenBuyNowModel = () => setOpenBuyNowModel(true);
  const handleCloseBuyNowModel = () => setOpenBuyNowModel(false);

  return (
    <>
      {isBusy ? (
        <Container />
      ) : (
        <Container
          maxWidth="30"
          sx={{ background: "#fbfbfb", marginTop: "30px" }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={5} alignSelf="Top">
              <Card className={styles.card}>
                <CardContent
                  sx={{ display: "flex", padding: 0, alignSelf: "center" }}
                >
                  <div className={styles.ethereumIconDiv}>
                    <FaEthereum />
                  </div>
                  <Typography sx={{ fontSize: 12, marginRight: 2 }}>
                    <IconButton onClick={() => setLike(like + 1)}>
                      <FavoriteIcon sx={{ color: "red", width: 20 }} />
                    </IconButton>
                    {like}
                  </Typography>
                </CardContent>
                <CardActionArea>
                  <CardMedia
                    className={styles.cardImg}
                    component="img"
                    image={asset.image_url}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
              <Card className={styles.card}>
                <CardContent
                  sx={{
                    padding: "10px",
                    marginLeft: 1,
                    display: "flex",
                    alignSelf: "center",
                  }}
                >
                  <SubjectIcon />
                  <Typography className={styles.imageDisHeaderTypo}>
                    Description
                  </Typography>
                </CardContent>
                <hr />
                <CardContent sx={{ alignSelf: "center", background: "#fbfdff" }}>
                  <Typography sx={{ marginLeft: 2, color: "#8a939b" }}>
                    Created By you
                  </Typography>
                  <Typography sx={{ marginLeft: 2, fontSize: 14, marginTop: 1 }}>
                    {asset.description}
                  </Typography>
                </CardContent>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                  >
                    <BallotIcon />
                    <Typography className={styles.imageDisHeaderTypo}>
                      Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ background: "#fbfdff" }}>
                    <div className={styles.accordianDetailsDiv}>
                      <Typography className={styles.accordianDetailsLeftTypo}>
                        Contract Address
                      </Typography>
                      <Typography
                        className={clsx(
                          styles.accordianDetailsTypo,
                          styles.accordianDetailsTypo1Color
                        )}
                      > {assetContract.address.substring(0, 6) +
                        "...." +
                        assetContract.address.substring(
                          assetContract.address.length - 4
                        )}
                      </Typography>
                    </div>
                    <div className={styles.accordianDetailsDiv}>
                      <Typography className={styles.accordianDetailsLeftTypo}>
                        Token ID
                      </Typography>
                      <Typography
                        className={clsx(
                          styles.accordianDetailsTypo,
                          styles.accordianDetailsTypo1Color
                        )}
                      >
                        {asset.token_id.substring(0, 15) + "..."}
                      </Typography>
                    </div>
                    <div className={styles.accordianDetailsDiv}>
                      <Typography className={styles.accordianDetailsLeftTypo}>
                        Token Standard
                      </Typography>
                      <Typography
                        className={clsx(
                          styles.accordianDetailsTypo,
                          styles.accordianDetailsTypo2Color
                        )}
                      >
                        {assetContract.schema_name}
                      </Typography>
                    </div>
                    <div className={styles.accordianDetailsDiv}>
                      <Typography className={styles.accordianDetailsLeftTypo}>
                        Blockchain
                      </Typography>
                      <Typography
                        className={clsx(
                          styles.accordianDetailsTypo,
                          styles.accordianDetailsTypo2Color
                        )}
                      >
                        Ethereum
                      </Typography>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} alignSelf="Top">
              <div className={styles.imageInfo}>
                <div className={styles.rightHeaderDiv}>
                  <h1>{asset.collection.name}</h1>
                  <h1>{asset.name}</h1>
                </div>

                <Typography className={styles.descTypo1}>
                  0.00006 WETH ($ 0.19)
                </Typography>

                {/* 2nd stage */}

                <div className={styles.imageAuthors}>
                  <div className={styles.imageAuthorLi}>
                    <Typography>Creator</Typography>
                    <div className={styles.imageAuthor}>

                      <Avatar
                        alt="profile"
                        src={asset.creator.profile_img_url}
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "10px",
                          alignSelf: "center",
                        }}
                      />
                      <Typography sx={{ margin: 2, fontSize: 14, fontWeight: 600 }}>
                        {asset.creator.address}
                      </Typography>
                    </div>
                  </div>

                </div>

                {/* 5th stage */}
                <div className={styles.buttons}>
                  <div className={styles.btnDiv}>
                    <button className={styles.btn1} onClick={handleOpenMakeOfferSecondModel}>buy Now </button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

        </Container>
      )}
      <Makeofferfirstmodel
        open={openMakeOfferModel}
        handleOpen={handleOpenMakeOfferModel}
        handleClose={handleCloseMakeOfferModel}
        heading="Make an offer"
        placeholder="Amount"
        isMakeOfferSecondModel={true}
        isFooter={true}
        backicon={<KeyboardBackspaceOutlinedIcon sx={{ fontSize: "24px", color: "rgb(138, 147, 155)" }} />}
        openFirstModel={() => {
          setOpenMakeOfferFirstModel(true)
          setOpenMakeOfferModel(false)
        }}


      />

      <Makeofferfirstmodel
        open={openMakeOfferFirstModel}
        handleOpen={handleOpenMakeOfferFirstModel}
        handleClose={handleCloseMakeOfferFirstModel}
        heading="This is an unreviewed collection"
        isMakeOfferModel={true}
        openSecondModal={() => {
          setOpenMakeOfferFirstModel(false)
          setOpenMakeOfferModel(true)
        }}


      />
      <Makeofferfirstmodel
        open={openMakeOfferSecondModel}
        handleOpen={handleOpenMakeOfferSecondModel}
        handleClose={handleCloseMakeOfferSecondModel}
        heading="This is an unreviewed collection"

        isBuyNow={true}
        openCheckoutModel={() => {
          setOpenMakeOfferSecondModel(false)
          setOpenBuyNowModel(true)
        }}


      />

      <BuyNowCover
        open={openBuyNowModel}
        handleOpen={handleOpenBuyNowModel}
        handleClose={handleCloseBuyNowModel}
        heading="Complete Checkout"
        isFooter={true}

        backicon={<KeyboardBackspaceOutlinedIcon sx={{ fontSize: "24px", color: "rgb(138, 147, 155)" }} />}
        openFirstModel={() => {
          setOpenMakeOfferSecondModel(true)
          setOpenBuyNowModel(false)
        }}

      />

    </>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return <>{value === index && <h1>{children}</h1>}</>;
}

export default Viewnft;
