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
        width: { xs: 1, sm: 500, md: 500 },
        marginTop: 10,
        marginLeft: { md: "20px" },
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
            height: { xs: "60px", sm: "80px", md: 120 },
            width: { xs: "180px", sm: "210px", md: 350 },
            marginLeft: { xs: 5, sm: 15, md: 8 },
          }}
          alt="..."
          src="./assets/img/tecno1.png"
        />
        <Box
          component={"img"}
          sx={{
            height: { xs: 80, sm: 100 },
            width: { xs: 230, sm: 250 },
            marginLeft: { xs: 0, sm: 2 },
          }}
          alt="..."
          src="./assets/img/tecno2.png"
        />
        <Box
          component={"img"}
          sx={{
            height: { xs: 110, sm: 150 },
            width: { xs: 120, sm: 150 },
          }}
          alt="..."
          src="./assets/img/tecno3.png"
        />
        <Box
          component={"img"}
          sx={{
            height: { xs: "90px", md: 150 },
            width: { xs: "120px", md: 130 },
            marginLeft: { xs: 0, sm: 10, md: 8 },
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
