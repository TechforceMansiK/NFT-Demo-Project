import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from "./Explore_Collections.module.css";
import { Grid } from "@mui/material";
import Collections from "./Collections";
import API from "../../api/OpenseaApi";
import { WalletContext } from "../../contexts/WalletContext";

function TabPanel(props) {
  const { children, value, index } = props;

  return <div>{value === index && <h1>{children}</h1>}</div>;
}

function ExploreCollections() {
  const [value, setValue] = React.useState(0);
  const [userprofile] = useContext(WalletContext);
  const [address, setWalletAddress] = React.useState("");

  const handleTabs = (event, val) => {
    console.warn(val);
    setValue(val);
  };

  const [collections, setCollections] = React.useState([]);

  React.useEffect(() => {
    if (userprofile.walletAddress) {
      const url = `${process.env.REACT_APP_OPENSEA_BASE_URL}${process.env.REACT_APP_FETCH_OPENSEA_COLLECTIONS}?asset_owner=` + userprofile.walletAddress + `&offset=0&limit=4`;
      console.log("collections url===================", url)
      API.get(url).then((response) => {
        setCollections(response.data);
      });
    }
  }, [userprofile.walletAddress]);

  console.log("==============", collections)

  return (
    <div className={styles.mainPara}>
      <h1 className={styles.main}>
        <b>My Collections</b>
      </h1>
      <Box sx={{ flexGrow: 1, marginLeft: 5, marginRight: 5, marginTop: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {collections.map((collection, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Collections
                sourceLink={collection.image_url}
                name={collection.name}
                by="you"
                items={collection.owned_asset_count}
                slug={collection.slug}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default ExploreCollections;
