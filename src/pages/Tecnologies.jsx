import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import CardBack from "../components/CardBack";
import Cards from "../components/Cards";

const Tecnologies = () => {
  return (
    <Box id="Tecnologias" sx={{ marginRight: 0 }}>
      <Typography
        variant="h3"
        mt={5}
        color="white"
        sx={{ textAlign: "center" }}
      >
        Tecnologias
      </Typography>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          flexWrap: { md: "wrap" },
          justifyContent: { md: "center", lg: "space-between" },
        }}
      >
        <Cards></Cards>
        <CardBack></CardBack>
      </Box>
    </Box>
  );
};

export default Tecnologies;
