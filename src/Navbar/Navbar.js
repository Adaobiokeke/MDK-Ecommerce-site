import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/logo.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "white",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logbtn: {
    border: "1px solid #02324f",
    backgroundColor: "#02324f",
    color: "white",
    "&:hover": {
      color: "black",
    },
  },
  navigation: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "black",
    },
  },

  image: {
    width: 30,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <h4
            style={{
              textDecoration: "none",
              color: "#02324f",
              fontFamily: "cursive",
              flexGrow: 1,
            }}
          >
            MDK Palace
          </h4>
          <Button color="white" className={classes.logbtn}>
            <NavLink to="./carousel" className={classes.navigation}>
              Shop Now
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
