import { Avatar, Container, Grid, Typography } from "@mui/material";
import React from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useTranslation } from "react-i18next";

import styles from "./Getstarted.module.css";

function Getstarted() {
  const { t } = useTranslation();

  return (
    <div>
      <Container maxWidth="30" sx={{ background: "#fbf9f9" }}>
        <h3 className="mt-5 mb-4 text-center">
          {t("home_page.get_started.heading")}
        </h3>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className={styles.flexDiv}>
              <Avatar
                alt="blank"
                variant="rounded"
                sx={{ width: 40, height: 40, background: "#5f61f526" }}
              >
                <AccountBalanceWalletOutlinedIcon
                  sx={{ color: "#c42513", fontSize: 18 }}
                />
              </Avatar>
              <Typography sx={{ margin: 2, fontSize: 16, fontWeight: "bold" }}>
                {t("home_page.get_started.set_up_your_wallet.title")}
              </Typography>
            </div>
            <div className={styles.paraDiv}>
              {t("home_page.get_started.set_up_your_wallet.text")}{" "}
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className={styles.flexDiv}>
              <Avatar
                alt="blank"
                variant="rounded"
                sx={{ width: 40, height: 40, background: "#25a56a26" }}
              >
                <WidgetsOutlinedIcon sx={{ color: "#25a56a", fontSize: 18 }} />
              </Avatar>
              <Typography sx={{ margin: 2, fontSize: 16, fontWeight: "bold" }}>
                {t("home_page.get_started.create_your_collection.title")}
              </Typography>
            </div>
            <div className={styles.paraDiv}>
              {t("home_page.get_started.create_your_collection.text")}{" "}
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className={styles.flexDiv}>
              <Avatar
                alt="blank"
                variant="rounded"
                sx={{ width: 40, height: 40, background: "#783be526" }}
              >
                <CollectionsOutlinedIcon
                  sx={{ color: "#8754e3", fontSize: 18 }}
                />
              </Avatar>
              <Typography sx={{ margin: 2, fontSize: 16, fontWeight: "bold" }}>
                {t("home_page.get_started.add_your_nfts.title")}
              </Typography>
            </div>
            <div className={styles.paraDiv}>
              {t("home_page.get_started.add_your_nfts.text")}
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className={styles.flexDiv}>
              <Avatar
                alt="blank"
                variant="rounded"
                sx={{ width: 40, height: 40, background: "#f9e3e3" }}
              >
                <LabelOutlinedIcon sx={{ color: "#ec5f5f", fontSize: 18 }} />
              </Avatar>
              <Typography sx={{ margin: 2, fontSize: 16, fontWeight: "bold" }}>
                {t("home_page.get_started.list_them_for_sale.title")}
              </Typography>
            </div>
            <div className={styles.paraDiv}>
              {t("home_page.get_started.list_them_for_sale.text")}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Getstarted;
