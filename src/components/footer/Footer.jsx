import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo.png";
import styles from'./Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.footerClean}>
        <footer className="container py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md item">
                <div className={styles.siteFooterBar}>
                  <div className={styles.content}>
                    <img src={Logo} alt="logo" />
                  </div>
                </div>
                <p className={styles.footerIntro + " font-italic text-muted"}>
                  NFT is the brainchild of a diverse and talented group of
                  people from both worlds of art and finance.
                </p>
              </div>
              <div className="col-12 col-md item">
              <h4>{t("footer.nft_marketplace")}</h4>
                <ul>
                  <li>
                    <a href="/">About NFT</a>
                  </li>
                  <li>
                    <a href="/">Privacy</a>
                  </li>
                  <li>
                    <a href="/">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md item">
              <h4>{t("common.explore")}</h4>
                <ul>
                  <li>
                    <a href="/">Art</a>
                  </li>
                  <li>
                    <a href="/">Photograohy</a>
                  </li>
                  <li>
                    <a href="/">Games</a>
                  </li>
                  <li>
                    <a href="/">Music</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md item">
              <h4>{t("footer.technologies")}</h4>
                <ul>
                  <li>
                    <a href="/">Domians</a>
                  </li>
                  <li>
                    <a href="/">DeFi</a>
                  </li>
                  <li>
                    <a href="/">Metaverse</a>
                  </li>
                  <li>
                    <a href="/">Memes</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md item">
              <h4>{t("footer.community")}</h4>
                <ul>
                  <li>
                    <a href="/">Help Center</a>
                  </li>
                  <li>
                    <a href="/">Discussion</a>
                  </li>
                </ul>
              </div>
              <div className="footer">
              <h5>{t("footer.follow_us")}</h5>
                <div className={styles.socialLinks}>
                  <a href="/">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="/">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="/">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="/">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="mt-5">
                <p className={styles.mainHeroPara}>
                  Copyright @2021 NFT MarketPlace.All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
