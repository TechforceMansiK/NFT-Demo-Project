import { Box, Card, Collapse, Modal } from "@mui/material";
import React from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FaEthereum } from "react-icons/fa";
import styles from './BuyNow.module.css';
import Logo from "../../assets/logo.png";
import Buy from "./Buy";

const style = {
  position: "relative",
  border: "1px solid rgb(229, 232, 235)",
  background: "rgb(255, 255, 255)",
  width: "750px",
  maxHeight: "calc(100vh - 0px)",
  maxWidth: "calc(100% - 32px)",
  borderRadius: "10px",

  marginTop: "10px",
  marginBottom: "0px",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -30%)",
  bgcolor: "rgb(255, 255, 255)",
};

export default function BuyNowCover(props) {

const [open, setOpen] = React.useState(true); 

    return(
     <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
  
       <Box sx={style}>
          <header className={styles.modelHeader}>
          <h5 className={styles.header}><b>Complete Checkout</b></h5>
          </header>
          

          <section className={styles.modelSection}>
          <Buy 
          cardClass={styles.card}
          divClass={styles.dom}
          typoClass={styles.typog}
          name="item"
          typograClass={styles.subtotal}
          marginLeftValue="85.5%"
          value="subtotal"      
          />
          <hr className={styles.horiz}></hr>

          <Buy
          divClass={styles.dom}
          typoClass={styles.typog}
          marginTopValue="-20px"
          marginBottomValue="15px"
          mediaClass={styles.image}
          img1={Logo}
          typograClass={styles.typography}
          value="Azuki God"
          typograaClass={styles.typographyin}
          valueB="Azuki_#399"
          typographyClass={styles.bub}
          symbol={<FaEthereum />}
          amount="1"
          typographyyClass={styles.bob}
          valueC="$405.65" 
          />
          <hr className={styles.horiz}></hr>

          <Buy 
          divClass={styles.dom}
          typoClass={styles.typog}
          marginTopValue="-1px"
          name="Total"
          typograClass={styles.typogra}
          value={< FaEthereum />}
          valueSub="1"
          typograaClass={styles.pill}
          valueB="$405.65"
           />
          </section>

      
             <hr className={styles.horizontal}></hr>
             <div>
             <Button className={styles.button} variant="contained"><b>Confirm checkout</b></Button>
             </div>
      
             <button className={styles.modelBtnBack} onClick={props.openFirstModel}>
          {props.backicon}
        </button>

          <button className={styles.modelBtnClose} onClick={props.handleClose}>
          <CloseIcon sx={{ fontSize: "24px", color: "rgb(138, 147, 155)" }} />
          </button>
        </Box>
        </Modal>  
    );
}