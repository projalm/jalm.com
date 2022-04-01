import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import CardBack from "../components/CardBack";
import Cards from "../components/Cards";

const Tecnologies = () => {
  return (
    <Container>
      <Box id="Tecnologias" sx={{ marginRight: { xs: 0 } }}>
        <Typography
          variant="h3"
          mt={15}
          color="white"
          sx={{ textAlign: "center", fontSize: { xs: "25px", md: "40px" } }}
        >
          Tecnologias
        </Typography>
        <Box
          sx={{
            display: { xs: "flex", sm: "flex", md: "flex" },
            flexWrap: { sm: "wrap", md: "nowrap" },
            justifyContent: {
              xs: "space-between",
              sm: "center",
              md: "space-between",
              lg: "space-between",
            },
          }}
        >
          <Cards></Cards>
          <CardBack></CardBack>
        </Box>
      </Box>
    </Container>
  );
};

export default Tecnologies;
