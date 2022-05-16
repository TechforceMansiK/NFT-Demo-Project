import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./Explore_Collections.module.css";
import { useNavigate } from "react-router-dom";

export default function Collcetions(props) {

  let navigate = useNavigate();

  return (
    <div>
      <Card className={styles.card1} sx={{ maxWidth: 500, borderRadius: 2 }} onClick={() => navigate("/view-collection", { state: { items: props.items, collectionName: props.name, collectionImageUrl: props.sourceLink, slug: props.slug } })} >
        <CardActionArea>
          <CardMedia
            component="img"
            width="200"
            height="300"
            image={props.sourceLink}
            alt="green iguana"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              <b>{props.name}</b>
            </Typography>

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
              color="text.primary"
              sx={{
                color: "#191970",
                fontSize: 15,
                marginTop: -1,
                marginBottom: 5,
              }}
            >
              <i>by: </i>
              <b>{props.by}</b>
            </Typography>

            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
            
            >
              <b>Explore the {props.name} collection</b>
            </Typography>

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              <b>{props.items} {props.items > 1 ? "Items" : "Item" }</b>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
