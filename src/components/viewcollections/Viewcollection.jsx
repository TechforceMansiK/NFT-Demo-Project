import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Tooltip,
  tooltipClasses,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import styles from "./Viewcollection.module.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import clsx from "clsx";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import { FaEthereum } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import GridOnIcon from "@mui/icons-material/GridOn";
import SearchIcon from "@mui/icons-material/Search";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FlagSharpIcon from '@mui/icons-material/FlagSharp';
import { useNavigate, useLocation } from "react-router-dom";
import { WalletContext } from "../../contexts/WalletContext";
import API from "../../api/OpenseaApi";

function Viewcollection() {
  const [like, setLike] = React.useState(0);
  const [userprofile] = useContext(WalletContext);
  let navigate = useNavigate();

  const location = useLocation();

  const items = location.state.items;
  const collection = location.state.collectionName;

  const [address, setAddress] = React.useState(userprofile.walletAddress);
  const [assets, setAssets] = React.useState([]);
  // "https://testnets-api.opensea.io/api/v1/assets?owner=0x2b03b2263731Ab65f0168044307c4C1B2e30EC99&order_direction=desc&offset=0&limit=20&collection=environment"
 
  React.useEffect(() => {
    setAddress(userprofile.walletAddress);
    if (userprofile.walletAddress) {
      const url = `${process.env.REACT_APP_OPENSEA_BASE_URL}${process.env.REACT_APP_FETCH_OPENSEA_ASSETS}?owner=` + userprofile.walletAddress + `&order_direction=asc&offset=0&limit=20&collection=` + location.state.slug;
      console.log("assets url===================", url)
      API.get(url).then((response) => {
        setAssets(response.data.assets);
      });
    }
  }, [userprofile.walletAddress]);

  console.log("assets-----", assets)
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
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        <div className={styles.bannerMainDiv}>
          <div className={styles.bannerDiv} style={{ height: "220px" }}>
            <div className={styles.imageDiv}>
              <img
                className={styles.image}
                src={location.state.collectionImageUrl}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainHeader}>
        <div className={styles.roundProfileMain}>
          <div className={styles.roundProfileDiv}>
            <img
              className={styles.roundImage}
              src={location.state.collectionImageUrl}
            ></img>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.actionMainDiv}>
            <BootstrapTooltip title="Add to Watchlist" arrow placement="top">
              <button className={styles.actionInsideBtn}>
                <div className={styles.btnMainDiv}>
                  <AddOutlinedIcon />
                </div>
                Add to watchlist
              </button>
            </BootstrapTooltip>
          </div>
          <div className={styles.action2MainDiv}>
            <BootstrapTooltip title="Website" arrow placement="top">
              <a
                href="/"
                className={clsx(
                  styles.action2InsideA,
                  styles.actionInsideBtn
                )}
              >
                <div className={styles.btnMainDiv}>
                  <LanguageOutlinedIcon />
                </div>
              </a>
            </BootstrapTooltip>
            <button
              className={clsx(
                styles.action2InsideA,
                styles.actionInsideBtn
              )} onClick={handleClick}
            >
              <div className={styles.btnMainDiv}>
                <MoreVertOutlinedIcon />
              </div>
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{ marginTop: 2, borderRadius: 10 }}
            >
              <MenuItem onClick={handleClose} sx={{ fontWeight: 600 }}><FlagSharpIcon sx={{ marginRight: 2 }} /> Report</MenuItem>

            </Menu>
          </div>
        </div>

        <div className={styles.descriptionName}>
          <h1 className={styles.nameH1}>{collection}</h1>
          <VerifiedIcon sx={{ fontSize: 32 }} color="primary" />
        </div>


        <div className={styles.boxes}>
          <Box
            className={styles.box}
            component="span"
            sx={{
              p: 2,
              border: "1px solid rgb(229, 232, 235)",
              width: "150px",
              margin: "5px",
              borderRadius: "10px",
              textAlign: "center",
              padding: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
              {items}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                marginTop: "5px",
                color: "rgb(138, 147, 155)",
              }}
            >
              items
            </Typography>
          </Box>
          <Box
            className={styles.box}
            component="span"
            sx={{
              p: 2,
              border: "1px solid rgb(229, 232, 235)",
              width: "150px",
              margin: "5px",
              borderRadius: "10px",
              textAlign: "center",
              padding: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
              1
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                marginTop: "5px",
                color: "rgb(138, 147, 155)",
              }}
            >
              owner
            </Typography>
          </Box>


        </div>
        <div className={styles.tagLine}>
          Welcome to the home of {collection} on OpenSea. Discover the best items in this collection.
        </div>

        <div className={styles.items}>
          <GridOnIcon sx={{ fontSize: 32, marginTop: 0.3 }} />
          <Typography sx={{ marginLeft: 1, fontWeight: 600, fontSize: 25 }}>
            {" "}
            Items
          </Typography>
        </div>
      </div>

      <div className={styles.itemInfo}>
        <div className={styles.itemTopHeader}>
          <div className={styles.search}>
            <SearchIcon />{" "}
            <input
              className={styles.input}
              placeholder="Search"
              vlaue="krunal"
            />
          </div>
          <div className={styles.itemActions}>
            <div className={styles.action2MainDiv}>
              <a

                className={clsx(
                  styles.action2InsideA,
                  styles.actionInsideBtn
                )}
              >
                <div className={styles.btnMainDiv}>
                  <GridViewSharpIcon />
                </div>
              </a>

              <BootstrapTooltip title="Small Display" arrow placement="top">
                <button
                  className={clsx(
                    styles.action2InsideA,
                    styles.actionInsideBtn
                  )}
                >
                  <div className={styles.btnMainDiv}>
                    <AppsSharpIcon />
                  </div>
                </button>
              </BootstrapTooltip>
            </div>
          </div>
        </div>
        <h5>{items} {items > 1 ? "Items" : "Item"}</h5>
      </div>
      <Container maxWidth="30">
        <Grid container spacing={2} justifyContent="center">
          {assets.map((asset, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card className={styles.card} onClick={() => navigate("/view-nft", { state: { contractAddress: asset.asset_contract.address, token_id: asset.token_id } })}>
                <CardActionArea sx={{ marginTop: "40px" }}>
                  <CardMedia
                    className={styles.cardImg}
                    component="img"
                    height="500"
                    image={asset.image_url}
                    alt="green iguana"
                  />
                  <div className={styles.insideCardDiv}>
                    <div className={styles.flexDiv}>
                      <div className={styles.typo1Div}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: 12,
                            color: "rgb(112, 122, 131)",
                          }}
                        >
                          {collection}
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: 12 }}>
                          {asset.name}
                        </Typography>
                      </div>
                      <div className={styles.typo2Div}>
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: 12,
                            color: "rgb(112, 122, 131)",
                            marginTop: 2,
                          }}
                        >
                          Price
                        </Typography>
                        <Typography sx={{ fontWeight: "600", fontSize: 12 }}>
                          <FaEthereum />
                          2.98
                        </Typography>

                        <div className={styles.flexDiv}>
                          <Typography
                            sx={{
                              fontSize: 11,
                              color: "rgb(112, 122, 131)",
                            }}
                          >
                            Last
                          </Typography>
                          <FaEthereum className={styles.etherIconStyle} />
                          <Typography
                            sx={{
                              fontSize: 11,
                              color: "rgb(53, 56, 64)",
                              fontWeight: 600,
                            }}
                          >
                            2.99
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className={styles.hr} />
                </CardActionArea>
                <CardContent className={styles.cardContent}>
                  <div className={styles.buyNow}>
                    <Link href="/" sx={{ fontWeight: 600 }}>
                      ...
                    </Link>
                  </div>
                  <Typography
                    sx={{
                      fontSize: 12,
                      marginRight: 1,
                      color: "rgb(112, 122, 131)",
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  >
                    <IconButton onClick={() => setLike(like + 1)}>
                      <BootstrapTooltip title="Favourite" arrow placement="top">
                        <FavoriteBorderSharpIcon
                          sx={{ color: "rgb(138, 147, 155)", width: 20 }}
                          className={styles.likeIcon}
                        />
                      </BootstrapTooltip>
                    </IconButton>

                    {like}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Viewcollection;
