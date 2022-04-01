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
      sx={{
        height: 500,
        width: { xs: 180, sm: 500, md: 500 },
        marginTop: 10,
        marginLeft: { md: "0px" },
        display: "flex",
        backdropFilter: "blur(15px)",
        backgroundColor: "rgba(243, 243, 243, 0.3);",
        boxShadow: "1px 7px 32px 4px rgba(0,0,0,0.75)",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: { xs: "96%", sm: "none" },
          maxWidth: { xs: "960px", sm: "none" },
          margin: { xs: "0", sm: "none" },
        }}
      >
        <Box
          component={"img"}
          sx={{
            height: { xs: "30px", md: 100 },
            width: { xs: "150px", md: 400 },
            marginTop: { xs: 0, sm: 2 },
            marginLeft: { xs: 1, sm: 5 },
            marginRight: { xs: 5 },
            minWidth: 5,
          }}
          alt="..."
          src="./assets/img/tecno5.png"
        />
        <Box
          component="img"
          src="./assets/img/tecno6.png"
          alt="html css javascript"
          sx={{
            width: { xs: 100, sm: 200 },
            height: { xs: 60, sm: 100 },
            marginRight: { xs: 5, sm: 0 },
            marginLeft: { xs: 2, sm: 0 },
            minWidth: 5,
          }}
        />
        <Box
          component="img"
          src="./assets/img/tecno7.png"
          alt="html css javascript"
          sx={{
            width: { xs: 150, sm: 210 },
            height: { xs: 80, sm: "110px" },
            marginLeft: { sm: 15, md: 0 },
            marginRight: { xs: 5, sm: 0 },
            minWidth: 5,
          }}
        />
        <Box
          component="img"
          src="./assets/img/tecno8.png"
          alt="html css javascript"
          sx={{
            width: { xs: 150, sm: 222 },
            height: { xs: 90, sm: 113 },
            marginLeft: { xs: 0, sm: 5 },
            marginRight: { xs: 5 },
            minWidth: 5,
          }}
        />
        <Box
          component="img"
          src="./assets/img/tecno9.png"
          alt="html css javascript"
          sx={{
            width: { xs: "150px", sm: 270 },
            height: { xs: 80, sm: 120 },
            marginBottom: { xs: 0, sm: 5, md: "none" },
            marginLeft: { xs: 0, sm: 15, md: 17 },
            marginRight: { xs: 5 },
            minWidth: 5,
          }}
        />
      </CardContent>
    </Card>
  );
};

export default CardBack;
