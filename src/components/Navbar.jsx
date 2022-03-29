import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {
  createTheme,
  CssBaseline,
  Link,
  useScrollTrigger,
  ThemeProvider,
} from "@mui/material";

const pages = ["Init", "Tecnologias", "Portafolio", "Contacto"];
const settings = ["Perfil", "Account", "Dashboard", "Logout"];

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

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "rgba(243, 243, 243, 0.1)" : "transparent",
      backdropFilter: trigger ? "blur(6px)" : "none",
      // color: trigger ? "white" : "black",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
      padding: "0px 0px",
    },
  });
};

const ScrollToColor01 = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <CssBaseline />
      <ScrollToColor01>
        <AppBar
          defaultValue={30}
          sx={{
            background: "none",
            boxShadow: "none",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Link
                        href={`#${page}`}
                        sx={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link
                    key={page}
                    href={`#${page}`}
                    sx={{ textDecoration: "none" }}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Abrir curriculum">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <ThemeProvider theme={theme}>
                      <Button color="primary" variant="outlined">
                        Curriculum
                      </Button>
                    </ThemeProvider>
                  </IconButton>
                </Tooltip>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ScrollToColor01>
    </>
  );
};
export default Navbar;
