import {
  Box,
  Button,
  createTheme,
  styled,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Social from "../pages/Social";

const theme = createTheme({
  typography: {
    fontFamily: ["Space Mono", "monospace"],
  },
  palette: {
    primary: {
      main: "#ab47bc",
    },
    secondary: {
      main: "#ab47bc",
    },
  },
});

const ValidationTextField = styled(TextField)({
  "& input": {
    color: "white",
  },
  "& input:valid + fieldset": {
    borderColor: "#ab47bc",
    borderWidth: 1,
  },
  "& input:invalid + fieldset": {
    borderColor: "white",
    borderWidth: 1,
  },
  "& input:valid:focus + fieldset": {
    borderColor: "white", // override inline-style
  },
  "& input:invalid:hover + fieldset": {
    borderColor: "white",
  },
  "& input:valid:hover + fieldset": {
    borderColor: "white",
  },
  "& label": {
    color: "#ab47bc",
  },
});

const MultilineText = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderWidth: 1,
      borderColor: "#ab47bc",
    },
    "&:hover fieldset": {
      borderWidth: 1,
      borderColor: "white",
    },
  },
  "& label": {
    color: "#ab47bc",
  },
});

const Form = () => {
  const [value, setValue] = useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      id="Contacto"
      sx={{
        display: { xs: "flex" },
        flexDirection: { xs: "column" },
        justifyContent: { xs: "center" },
      }}
    >
      <Box>
        <Typography
          variant="h3"
          mt={30}
          mb={10}
          color="white"
          sx={{ textAlign: "center" }}
        >
          Contacto
        </Typography>
      </Box>
      <Box component="form" sx={{ display: { sm: "flex", flexWrap: "wrap" } }}>
        <ValidationTextField
          label="Correo"
          id="outlined-required"
          sx={{
            width: { xs: 1, lg: 553, md: 1, sm: 1 },
            marginRight: { md: 0, lg: 5 },
          }}
        />
        <ValidationTextField
          id="outlined-required"
          label="Nombre o Empresa"
          sx={{
            width: { xs: 1, lg: 553, md: 1, sm: 1 },
            marginTop: { xs: "10px", sm: "10px", md: "10px", lg: "0px" },
          }}
        />
        <MultilineText
          id="outlined-multiline-static"
          label="Texto"
          variant="outlined"
          multiline
          rows={4}
          sx={{
            width: 1,
            marginTop: 5,
            marginBottom: 5,
          }}
        />
        <ThemeProvider theme={theme}>
          <Box sx={{ display: "flex", justifyContent: "right" }}>
            <Button size="large" variant="outlined">
              {" "}
              Enviar
            </Button>
          </Box>
        </ThemeProvider>
      </Box>
      <Social />
    </Box>
  );
};

export default Form;
