import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Logo from "../../assets/logo.png";
import {
  AppBar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PersonIcon from "@mui/icons-material/Person";
import Switch from "@mui/material/Switch";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Web3Component from "../../utils/web3/web3.jsx";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "60ch",
    },
  },
}));

const label = { inputProps: { "aria-label": "Switch demo" } };

const Navbar = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenuUrl = (url) => {
    handleMenuClose();
    navigate(url)
  };
  

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
        width: "30px",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
        width: "30px",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => handleMenuUrl('user')}>
        <PersonIcon />
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <FavoriteBorderIcon />
        favorites
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <RemoveRedEyeIcon />
        Watchlist
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <AppsIcon />
        My Collections
      </MenuItem>
      <MenuItem onClick={() => handleMenuUrl('/user/settings')}>
        <SettingsIcon />
        Settings
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <DarkModeIcon />
        Night Mode
        <Switch {...label} />
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography></Typography>
            <Box
              component="img"
              sx={{
                height: 64,
              }}
              alt="Your logo."
              src={Logo}
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  marginLeft: "10px",
                  marginRight: "10px",
                  cursor:"pointer"
                },
              }}
              onClick={() => navigate("/")}
            >
              NFT MarketPlace
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Search className={styles.bar}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search items, collections and accounts"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Tabs textColor="#ffff">
              <Tab
                className={styles.tabName}
                label={t("common.explore")}
                onClick={() => navigate("/explore-collection")}
              />

              <Tab
                className={styles.tabName}
                label="Resources"
                onClick={() => navigate("/")}
              />
              <Tab
                className={styles.tabName}
                label={t("button.create")}
                onClick={() => navigate("/create-nft")}
              />
            </Tabs>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                className={styles.icon}
                size="large"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onMouseOver={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircleOutlinedIcon fontSize="large" />
              </IconButton>
              {/* <IconButton
                size="large"
                edge="end"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <AccountBalanceWalletOutlinedIcon fontSize="large" />
              </IconButton> */}
              <Web3Component />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
};

export default Navbar;
