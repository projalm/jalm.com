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
    <div id="Contacto">
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
      <Box component="form">
        <ValidationTextField
          label="Correo"
          id="outlined-required"
          sx={{ width: 553, marginRight: 5 }}
        />
        <ValidationTextField
          width="100px"
          id="outlined-required"
          label="Nombre o Empresa"
          sx={{ width: 553 }}
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
    </div>
  );
};

export default Form;
