import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Tecnologies from "./pages/Tecnologies";
import Portafolio from "./pages/Portafolio";
import Form from "./components/Form";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <Profile />
      <Box
        component={"img"}
        sx={{
          height: { xs: 10, sm: 10, md: 10 },
          width: { xs: 1, sm: 1, md: 1 },
        }}
        alt="..."
        src="./assets/img/line.png"
      />
      <Tecnologies />
      <Portafolio />
      <Form />
    </Box>
  );
}

export default App;
