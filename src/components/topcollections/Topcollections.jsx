import React from "react";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import { FaEthereum } from "react-icons/fa";
import { Card } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styles from "./Topcollections.module.css";
import API from "../../api/Api";

function Topcollection() {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const [data, setData] = React.useState([]);

  const url=`${process.env.REACT_APP_FETCH_TOP_NFT_API_URL}`;


  React.useEffect(() => {
    API.get(url).then((response) => {
      setData(response.data);
      });
  }, []);
  

  return (
    <>
      <Container maxWidth="30">
        <h3 align="center" className="mt-5 mb-4">
          {t("home_page.top_collections_heading")}
        </h3>
        <Grid container spacing={4}>
        {data.map((topCard) => (
         <Grid item xs={12} sm={8} md={6} lg={4}>
            <Card
              className={styles.cardDiv}
              sx={{
                borderRadius: 2,
                boxShadow: 1,
                variant: "outlined",
               
              }}
              onClick={() => navigate("/view-collection")}
            >
              <div className={styles.insideCardDiv}>
                <div className={styles.flexDiv}>
                  <h5 className={styles.h5}>1</h5>
                  <Avatar
                    alt={topCard.nftCollection.collectionName}
                    src={`data:image/png;base64,${topCard.nftCollection.logo}`}
                    sx={{ width: 60, height: 60, ml: 2 }}
                  />
                  <div className={styles.typo1Div}>
                    <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
                     {topCard.nftCollection.collectionName} 
                    </Typography>
                    <Typography sx={{ color: "#616161", fontSize: 13 }}>
                      Floor price : <FaEthereum /> 103{" "}
                    </Typography>
                  </div>
                  <div className={styles.typo2Div}>
                    <Typography sx={{ color: "red" }}>-31.11%</Typography>
                    <Typography sx={{ color: "#9e9e9e", fontWeight: "600" }}>
                      <FaEthereum />
                      20150.59
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Topcollection;
