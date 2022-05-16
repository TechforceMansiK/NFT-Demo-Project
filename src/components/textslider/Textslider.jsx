import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useTranslation } from "react-i18next";
import styles from "./Textslider.module.css";
import { useNavigate } from "react-router-dom";

function Textslider() {
  const { t } = useTranslation();
  let navigate = useNavigate();
  return (
    <div>
      <div className={styles.backgroundContainer}>
        <div
          style={{
            backgroundImage:
              "url(https://lh3.googleusercontent.com/C0K1INFhIXcsRwalRPr_3SkYpk_esO039M9veydGwcrrNFks737CZW2ZPKNNpev5oXuS68NbjTQyvw_P7J8-02Otlf5VWXSYMwYJ9w=s250",
          }}
          className={styles.blurBackground}
        ></div>
      </div>
      <Grid container spacing={4} style={{ marginTop: "0px", height: "100%" }}>
        <Grid item xs={12} sm={6} alignSelf="center">
          <Typography
            sx={{
              ml: 7,
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "left",
              lineHeight: 1,
            }}
          >
            {" "}
            {t("home_page.slieder_heading")}
          </Typography>
          <Typography
            sx={{
              ml: 7,
              mt: 3,
              fontSize: 22,
              maxWidth: 400,
              textAlign: "left",
            }}
          >
            {t("home_page.slieder_subheading")}
          </Typography>

          <Stack spacing={2} direction="row" marginLeft={7} marginTop={7}>
            <Button
              className={styles.containedBtn}
              variant="contained"
              onClick={() => navigate("/explore-collection")}
            >
              {t("common.explore")}
            </Button>
            <Button
              className={styles.outlinedBtn}
              variant="outlined"
              onClick={() => navigate("/create-nft")}
            >
              {t("button.create")}
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              maxWidth: "80%",
              borderRadius: 3,
              boxShadow: 3,
              ml: 4,
              mt: 5,
            }}
            onClick={() => navigate("/view-nft")}>
            <CardActionArea >
              <CardMedia
                component="img"
                height="400"
                image="https://lh3.googleusercontent.com/C0K1INFhIXcsRwalRPr_3SkYpk_esO039M9veydGwcrrNFks737CZW2ZPKNNpev5oXuS68NbjTQyvw_P7J8-02Otlf5VWXSYMwYJ9w=w600"
                alt="green iguana"
              />
            </CardActionArea>
            <CardActionArea>
              <CardContent sx={{ display: "flex" }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://lh3.googleusercontent.com/F4vhQWbtsXWrdkeYt189xQWqy5IqIwLo6f7JaMoJXtNlkIuCyWMTyPYgNmPGgmaBrR-AdNirde9MaCFhG9jckHt9FxjHNuuwutXjLw=s80"
                  sx={{ width: 44, height: 44 }}
                />
                <div className={styles.cardTypo1}>
                  <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
                    Man Without a Face
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 600, fontSize: 14, color: "#2081e2" }}
                  >
                    SpasiSohani
                  </Typography>
                </div>
                <a href="/" className={styles.footerIcon}>
                  <InfoOutlinedIcon />
                </a>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Textslider;
