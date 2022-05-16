import React from "react";

const walletDetails = {
    userprofile: {
    userProfileId: "",
	username: "",
	bio: "",
	email: "",
	walletAddress: "",
	image: null,
	coverImage: null,
    },
    setUserprofile: () => { }
};

export const WalletContext = React.createContext(walletDetails);