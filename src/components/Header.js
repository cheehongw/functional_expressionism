import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import LoginMenuButton from "./LoginMenuButton.js";

export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const navigateTo = () => history.push("/");

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar} variant="dense">
          <div className={classes.container}>
            <img
              className={classes.img} //styling
              onClick={navigateTo} //onClick functionality
              src={process.env.PUBLIC_URL + "/logo192.png"}
              alt="logo"
            />
            <Typography
              onClick={navigateTo}
              variant="h6"
              color="inherit"
              className={classes.title}
            >
              TinFood
            </Typography>
          </div>
          <LoginMenuButton color="inherit" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  container: {
    display: "flex",
    columnGap: "0.7em",
    position: "relative",
    alignItems: "center",
    flexGrow: 1,
    maxHeight: "48px",
    paddingRight: "24px",
  },

  img: {
    maxHeight: "inherit",
    marginLeft: theme.spacing(1),
    cursor: "pointer",
  },

  title: {
    maxHeight: "inherit",
    fontFamily: "Carter One",
  },
  toolbar: {
    backgroundImage:
      "linear-gradient(90deg, rgba(234,90,122,1) 0%, rgba(222,121,30,1) 60%, rgba(226,196,41,1) 100%)",
  },
}));
