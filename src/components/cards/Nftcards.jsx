import { Container, Grid } from "@mui/material";
import React from "react";
import Cards from "./Cards";
import { useTranslation } from "react-i18next";
import API from "../../api/Api";

function Nftcards() {
  const { t } = useTranslation();
  const [data, setData] = React.useState([]);

  const url=`${process.env.REACT_APP_FETCH_RECENT_NFT_API_URL}`;

  React.useEffect(() => {
    API.get(url).then((response) => {
      setData(response.data); 
    });
  }, []);

  return (
    <div>
      <Container maxWidth="30">
        <h2 className="text-left mt-4"> | {t("common.explore")}</h2>
        <Grid container spacing={2} justifyContent="center">
          {data.map((cardDetails) => (
            <Grid item xs={12} sm={6} md={3}>
              <Cards
                collectionName={cardDetails.collectionName}
                logo={cardDetails.logo}
              />
            </Grid>
          ))};
        </Grid>
      </Container>
    </div>
  );
}

export default Nftcards;
