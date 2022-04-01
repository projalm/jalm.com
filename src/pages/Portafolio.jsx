import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  createTheme,
  Typography,
  ThemeProvider,
  Container,
} from "@mui/material";
import React from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Space Mono", "monospace"],
  },
  palette: {
    primary: {
      main: "rgb(228, 10, 216)",
    },
    secondary: {
      main: "#ab47bc",
    },
  },
});

const Portafolio = () => {
  const tecno = [
    "ReactJS",
    "Bootstrap",
    "Django",
    "Django Rest Framework",
    "Heroku",
  ];

  return (
    <Container>
      <Box id="Portafolio">
        <Typography
          variant="h3"
          mt={10}
          mb={10}
          color="white"
          sx={{ textAlign: "center", fontSize: { xs: "25px", md: "40px" } }}
        >
          Portafolio
        </Typography>
        <ThemeProvider theme={theme}>
          <Box sx={{ marginBottom: 5 }}>
            <Box
              sx={{
                width: { xs: 1, md: "400px" },
                height: "300px",
                marginLeft: { xs: 0 },
              }}
            >
              <Card
                sx={{
                  borderRadius: 1,
                  backgroundImage: `url("./assets/img/BioRecycle.png")`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: { xs: 1, md: "400px" },
                  height: "300px",
                  display: "flex",
                  fleWrap: "wrap",

                  alignItems: "center",
                  opacity: 1,
                  boxShadow: "1px 7px 32px 4px rgba(0,0,0,0.75)",
                  "&:hover": {
                    opacity: 0.7,
                  },
                  "&:hover #set": {
                    visibility: "visible",
                    opacity: 1,
                  },
                }}
              >
                <CardContent
                  id="pro"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    "&:last-child": {
                      paddingBottom: "0px",
                    },
                  }}
                >
                  {tecno.map((tec) => (
                    <Button
                      id="set"
                      variant="contained"
                      color="primary"
                      size="small"
                      key={tec}
                      sx={{
                        marginRight: 1,

                        marginBottom: 1,
                        visibility: "hidden",
                        cursor: "default",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      {tec}
                    </Button>
                  ))}
                </CardContent>
              </Card>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: 2,
                }}
              >
                <Button variant="outlined" color="primary" size="medium">
                  Repositorio
                </Button>
                <Button variant="outlined" color="primary" size="medium">
                  Proyecto
                </Button>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </Box>
    </Container>
  );
};

export default Portafolio;
