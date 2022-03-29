import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import Image from "material-ui-image";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Cards = () => {
  return (
    <Card
      // className="blur"
      sx={{
        height: 500,
        width: 500,
        marginTop: 10,
        marginLeft: { xs: "20px" },
        minWidth: 275,
        display: "flex",
        backdropFilter: "blur(40px)",
        backgroundColor: "rgba(243, 243, 243, 0.3);",
        boxShadow: "1px 7px 32px 4px rgba(0,0,0,0.75)",
      }}
    >
      <CardContent sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box
          component={"img"}
          sx={{
            height: 120,
            width: 350,
            marginLeft: 8,
          }}
          alt="..."
          src="./assets/img/tecno1.png"
        />
        <Box
          component={"img"}
          sx={{
            height: 100,
            width: 250,
            marginTop: 2,
            marginLeft: 2,
          }}
          alt="..."
          src="./assets/img/tecno2.png"
        />
        <Box
          component={"img"}
          sx={{
            height: 150,
            width: 150,
          }}
          alt="..."
          src="./assets/img/tecno3.png"
        />
        <Box
          component={"img"}
          sx={{
            height: 150,
            width: 130,
            marginLeft: 5,
          }}
          alt="..."
          src="./assets/img/tecno4.png"
        />
        <Box
          component={"img"}
          sx={{
            height: 100,
            width: 120,
            marginLeft: 10,
          }}
          alt="..."
          src="./assets/img/git.png"
        />
      </CardContent>
    </Card>
  );
};

export default Cards;
