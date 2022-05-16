import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Link, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import styles from "./Cards.module.css";
import { useNavigate } from "react-router-dom";

function Cards(props) {
  const [like, setLike] = React.useState(0);
  let navigate = useNavigate();

  React.useEffect(() => {}, []);

  return (
    <div>
      <Card sx={{ maxWidth: 300, borderRadius: 5, boxShadow: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            // height="280"
            image={`data:image/png;base64,${props.logo}`}
            alt="green iguana"
            onClick={() => navigate("/view-nft")}
          />
        </CardActionArea>

        <Typography align="right" sx={{ mr: 1 }}>
          <IconButton onClick={() => setLike(like + 1)}>
            <FavoriteIcon sx={{ color: "red" }} />
          </IconButton>
          {like}
        </Typography>

        <CardContent align="left">
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            sx={{ cursor: "pointer", fontWeight: 600 }}
            onClick={() => navigate("/view-nft")}
          >
            {props.collectionName}
          </Typography>

          <div className={styles.cardContentDiv}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 34, height: 34, cursor: "pointer" }}
            />
            <Typography
              sx={{ margin: 1, cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              {" "}
              @3445443..089
            </Typography>
          </div>
        </CardContent>

        <hr className={styles.hr} />

        <CardContent align="left">
          <Typography
            variant="h7"
            component="h1"
            sx={{ color: "text.secondary", fontSize: 20 }}
          >
            Reserve Price
          </Typography>
          <Typography sx={{ fontSize: 15 }}>0.001 WETH</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cards;
