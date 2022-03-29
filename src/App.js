import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Container from "@mui/material/Container";
import Tecnologies from "./pages/Tecnologies";
import Portafolio from "./pages/Portafolio";
import Form from "./components/Form";
import Social from "./pages/Social";

function App() {
  return (
    <div>
      <Navbar />
      <Container fixed>
        <Profile />
        <Tecnologies />
        <Portafolio id="portafolio" />
        <Form />
        <Social />
      </Container>
    </div>
  );
}

export default App;
