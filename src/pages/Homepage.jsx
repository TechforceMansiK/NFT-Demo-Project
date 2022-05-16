import React from "react";
import Nftcards from "../components/cards/Nftcards";
import Getstarted from "../components/getstarted/Getstarted";
import Textslider from "../components/textslider/Textslider";
import Topcollection from '../components/topcollections/Topcollections';


function Homepage() {
   return (
      <>
         <Textslider />
         <Nftcards />
         <Topcollection />
         <Getstarted />
      </>
   );
}

export default Homepage;