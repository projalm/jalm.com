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
          mt={5}
          color="white"
          sx={{ textAlign: "center", fontSize: { xs: "40px" } }}
        >
          Tecnologias
        </Typography>
        <Box
          sx={{
            display: { xs: "block", sm: "flex", md: "flex" },
            flexWrap: { sm: "wrap", md: "wrap" },
            justifyContent: {
              sm: "center",
              md: "center",
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
