import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
//import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth";
import quLogo from "../asset/images/qulogo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Navbarusers() {
  
  const { isLoggedIn } = useAuth();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "rgb(129, 41, 114)" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Welcome to Training and Placement cell of Quantum University Roorkee
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "-20%",
            }}
          >
            <img
              style={{
                height: "50px", // Set the height to your desired size
                marginLeft: "-360%",
                width: "auto", // Maintain aspect ratio
                borderRadius: "50%", // Make the image round
                boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.75)", // Add a shadow
              }}
              src={quLogo}
            />
          </div>
        </DrawerHeader>
        <Divider />

        <List>
          {[
            {
              text: "Home",
              link: "/user-home",
              icon: <HomeIcon sx={{ color: "rgb(129, 41, 114)" }} />,
            },
            {
              text: "Application",
              link: "/user-applications",
              icon: (
                <LaptopChromebookIcon sx={{ color: "rgb(129, 41, 114)" }} />
              ),
            },
            {
              text: "Profile",
              link: "/user-profile",
              icon: <AccountCircleIcon sx={{ color: "rgb(129, 41, 114)" }} />,
            },

            {
              text: isLoggedIn ? "Logout" : "Sign In",
              link: isLoggedIn ? "/logout" : "/sign-in",
              icon: isLoggedIn ? (
                <LogoutIcon sx={{ color: "rgb(129, 41, 114)" }} />
              ) : (
                <LoginIcon sx={{ color: "rgb(129, 41, 114)" }} />
              ),
            },
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <Link
                to={item.link}
                style={{ color: "blue", textDecoration: "none" }}
                sx={{ width: "100%" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0, color: "rgb(52, 58, 64)" }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>

        <Divider />

        <div
          style={{
            opacity: open ? 1 : 0,
            backgroundColor: "rgb(129, 41, 114)",
            color: "white",
          }}
        >
          <p
            style={{
              marginTop: "3em",
              marginBottom: "3em",
              marginLeft: "1em",
              marginRight: "1em",
              fontSize: "0.8rem",
              textAlign: "center",
            }}
          >
            Copyright ©2024 Quantum University.
            <br /> All Rights Reserved
          </p>
        </div>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Typography>
      </Box> */}
    </Box>
  );
}
