import {
  Box,
  Button,
  Container,
  createTheme,
  Snackbar,
  styled,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";
import Social from "../pages/Social";
import emailjs from "@emailjs/browser";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

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
    error: {
      main: "#ab47bc",
    },
  },
});

const ValidationTextField = styled(TextField)({
  "& input": {
    color: "white",
  },
  "& .MuiFormHelperText-root": {
    color: "white",
  },
  "& input:valid + fieldset": {
    borderColor: "rgb(228, 10, 216)",
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
    color: "rgb(228, 10, 216)",
  },
});

const MultilineText = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderWidth: 1,
      borderColor: "rgb(228, 10, 216)",
    },
    "&:hover fieldset": {
      borderWidth: 1,
      borderColor: "white",
    },
  },
  "& label": {
    color: "rgb(228, 10, 216)",
  },
});

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [help, setHelp] = useState("");
  const [inputError, setInputError] = useState(false);
  const form = useRef();
  const timer = useRef();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
    setOpenError(false);
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }

    if (
      email.includes("@") &&
      email.length >= 7 &&
      email.includes(".") &&
      name.length >= 2
    ) {
      emailjs
        .sendForm(
          "service_jly5c8m",
          "template_5pdexsa",
          form.current,
          "AKYoMeiejhABZ2x7g"
        )
        .then(
          (result) => {
            console.log(result.text);
            setOpenSuccess(true);
          },
          (error) => {
            console.log(error.text);
            setOpenError(true);
          }
        );
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setOpenError(true);
    }
  };

  return (
    <Container>
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
            sx={{ textAlign: "center", fontSize: { xs: "25px", md: "40px" } }}
          >
            Contacto
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={sendEmail}
          ref={form}
          sx={{ display: { sm: "flex", flexWrap: "wrap" } }}
        >
          <ValidationTextField
            label="Correo"
            autoComplete="on"
            helperText={help}
            name="email"
            value={email}
            id="outlined-required"
            onChange={(event) => {
              setEmail(event.currentTarget.value);
              if (
                !email.includes("@") ||
                !email.includes(".") ||
                email.length <= 7
              ) {
                setInputError(true);
                setHelp("Coloque un correo. Ejemplo: ejemplo@correo.com");
              } else {
                setInputError(false);
                setHelp("");
              }
            }}
            sx={{
              width: { xs: 1, lg: 553, md: 1, sm: 1 },
              marginRight: { md: 0, lg: 5 },
            }}
          />
          <ValidationTextField
            id="outlined-required"
            label="Nombre o Empresa"
            name="name"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            sx={{
              width: { xs: 1, lg: 553, md: 1, sm: 1 },
              marginTop: { xs: "10px", sm: "10px", md: "10px", lg: "0px" },
            }}
          />
          <MultilineText
            id="outlined-multiline-static"
            label="Texto"
            variant="outlined"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.currentTarget.value)}
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
              <Button
                onClick={sendEmail}
                disabled={loading}
                size="large"
                variant="outlined"
              >
                {" "}
                Enviar
                {loading && (
                  <CircularProgress
                    color="primary"
                    size={24}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginTop: "-12px",
                      marginLeft: "-12px",
                    }}
                  />
                )}
              </Button>
            </Box>
          </ThemeProvider>
        </Box>
        <Social />
      </Box>
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Su mensaje se ha enviado con exito.
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Revise su formulario. Recuerde el formato del correo:
          ejemplo@correo.com y su nombre debe tener mas de dos caracteres
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Form;
