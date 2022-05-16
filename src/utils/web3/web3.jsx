import { IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { WalletContext } from "../../contexts/WalletContext";
import AlertComponent from "../../components/alert/AlertComponent";
// import ExploreCollections, {getCollection} from "../../components/collections/ExploreCollections";
import {
  addUpdateUserProfileDetails,
  getUserProfileDetails,
} from "../userprofile/UserProfileService";

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID;

let chainDeteched = {
  "0x1": "Ethereum Mainnet Network",
  "0x3": "Ropsten Test Network",
  "0x4": "Rinkeby Test Network",
  "0x5": "Goerli Test Network",
  "0x2a": "Kovan Test Network",
  "0x539": "Ganache Network",
};

const Web3Component = () => {
  let web3Modal;
  const [userprofile, setUserprofile] = useContext(WalletContext);

  const userprofileDetails = {
    userProfileId: "",
    username: "",
    bio: "",
    email: "",
    walletAddress: "",
    image: null,
    coverImage: null,
  };

  // const [address, setAddress] = useState("");
  const [web3, setWeb3] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const getProviderOptions = () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.REACT_APP_INFURA_ID,
        },
      },
    };
    return providerOptions;
  };

  web3Modal = new Web3Modal({
    network: CHAIN_ID,
    cacheProvider: true,
    providerOptions: getProviderOptions(),
  });

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      onConnect();
    }
  }, []);

  const onConnect = async () => {
    const provider = await web3Modal.connect();

    const _web3 = initWeb3(provider);
    await subscribeProvider(provider, _web3);
    const chainId = await _web3.eth.chainId();

    if (chainId !== undefined) {
      if (chainId !== CHAIN_ID) {
        setIsError(true);
        setMessage(
          "Please Connect to " +
            chainDeteched[CHAIN_ID] +
            " , And try to connect."
        );
        setOpen(true);
      } else {
        const accounts = await _web3.eth.getAccounts();
        const address = accounts[0];
  
        setWeb3(_web3);

        // userprofile.walletAddress = address;
        // setUserprofile(userprofile);
        setUserprofile({...userprofile, walletAddress: accounts[0]});
        
        // getCollection(userprofile.walletAddress);
        // fetchUserProfileDetails(address);
        console.log("+++++",userprofile);
        setIsError(false);
        setMessage("Wallet Connected");
        setOpen(true);
      }
    }
  };

  const fetchUserProfileDetails = (address) => {
    getUserProfileDetails(address).then((response) => {
      if (response && response.data) {
        if (response.data.status === "Success") {
          userprofileDetails.userProfileId = response.data.id;
          userprofileDetails.username = response.data.username;
          userprofileDetails.bio = response.data.bio;
          userprofileDetails.email = response.data.email;
          userprofileDetails.image = response.data.image;
          userprofileDetails.coverImage = response.data.coverImage;
          userprofileDetails.walletAddress = address;
          setUserprofile(userprofileDetails);
        } else {
          if (response.data.errorMessage === "User not exist") {
            addUpdateUserProfileDetails({walletAddress: address}).then(
              (response) => {
                if (response && response.data) {
                  if (response.status === "Success") {
                    userprofileDetails.walletAddress = address;
                    setUserprofile(userprofileDetails);
                  }
                }
              }
            );
          }
        }
      }
    });
  }

  const subscribeProvider = async (provider, _web3) => {
    if (!provider.on) {
      return;
    }
    provider.on("close", () => resetApp());
    provider.on("accountsChanged", async (accounts) => {
      // fetchUserProfileDetails(accounts[0])
      // userprofile.walletAddress = accounts[0];
      setUserprofile({...userprofile, walletAddress: accounts[0]});
    });
    provider.on("chainChanged", async (chainId) => {
      if (
        chainDeteched[chainId] &&
        chainDeteched[chainId] !== undefined &&
        chainId === CHAIN_ID  
      ) {
        const chainId = await _web3.eth.chainId();

        setIsError(false);
        setMessage("You have Connect to " + chainDeteched[chainId] + ".");
        setOpen(true);
      } else {
        setIsError(true);
        setMessage(
          "Please Connect to " +
            chainDeteched[CHAIN_ID] +
            " , And try to connect."
        );
        setOpen(true);
      }
    });
  };

  const resetApp = async () => {
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    await web3Modal.clearCachedProvider();

    setUserprofile({});
    setWeb3(null);

    setIsError(false);
    setMessage("Wallet DisConnected");
    setOpen(true);
  };

  function initWeb3(provider) {
    const web3 = new Web3(provider);

    web3.eth.extend({
      methods: [
        {
          name: "chainId",
          call: "eth_chainId",
        },
      ],
    });

    return web3;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="end"
        aria-label="show 17 new notifications"
        color="inherit"
        onClick={onConnect}
      >
        {userprofile.walletAddress ? (
          <Typography
            onClick={(event) => {
              event.stopPropagation();
              resetApp();
            }}
          >
            {userprofile.walletAddress.substring(0, 4) +
              "...." +
              userprofile.walletAddress.substring(
                userprofile.walletAddress.length - 4
              )}
          </Typography>
        ) : (
          <AccountBalanceWalletOutlinedIcon fontSize="large" />
        )}
      </IconButton>

      <AlertComponent
        position={{ vertical: "top", horizontal: "right" }}
        open={open}
        duration={5000}
        onClose={handleClose}
        transition="down"
        color={isError ? "error" : "success"}
        message={message}
      />
    </>
  );
};

export default Web3Component;
