import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CardBack = () => {
  return (
    <Card
      className="blur"
      sx={{
        height: 500,
        width: 500,
        marginTop: 10,
        minWidth: 275,
        display: "flex",
        backdropFilter: "blur(15px)",
        backgroundColor: "rgba(243, 243, 243, 0.3);",
        boxShadow: "1px 7px 32px 4px rgba(0,0,0,0.75)",
      }}
    >
      <CardContent sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box
          component={"img"}
          sx={{
            height: 100,
            width: 400,
            marginTop: 2,
            marginLeft: 5,
          }}
          alt="..."
          src="./assets/img/tecno5.png"
        />
        <CardMedia
          component="img"
          height=""
          image="./assets/img/tecno6.png"
          alt="html css javascript"
          sx={{ width: 200, height: 100 }}
        />
        <CardMedia
          component="img"
          height=""
          image="./assets/img/tecno7.png"
          alt="html css javascript"
          sx={{ width: 210, height: "110px" }}
        />
        <CardMedia
          component="img"
          height=""
          image="./assets/img/tecno8.png"
          alt="html css javascript"
          sx={{ width: 222, height: 113, marginLeft: 5 }}
        />
        <CardMedia
          component="img"
          height=""
          image="./assets/img/tecno9.png"
          alt="html css javascript"
          sx={{ width: 270, height: 70, marginBottom: 5, marginLeft: 17 }}
        />
      </CardContent>
    </Card>
  );
};

export default CardBack;
