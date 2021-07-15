import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import clsx from "clsx";

const useStyles = makeStyles((themes) => ({
  root: {
    flexGrow: 1,
  },

  button: {
    width: "100%",
    margin: "0 auto",
  },

  /* Styles applied to CardContent if `disablePadding={true}`. */
  padding: {
    padding: 0,
  },

  content: {
    alignContent: "center",
    width: "100%", //to make cardcontent span the whole buttonbase
    margin: "0 auto",
  },
}));

export default function ClickableCard(props) {

    const { 
        disablePadding=false,
        URL = '/',
        onClick = () => {},
    } = props;

    const classes = useStyles();
    const history = useHistory();

    //short timeout to let users experience animation effect when pressing the button
    const navigateTo = () => setTimeout(() => history.push(URL), 50)

    return (
        <Card className={classes.root}>
            <ButtonBase 
                className={classes.button}
                onClick={props.onClick === undefined ? navigateTo : onClick}
                >
                <CardContent className={ clsx(
                    classes.content, 
                    {
                        [classes.padding]: disablePadding,
                    },
                ) }>
                    {props.children}
                </CardContent>
            </ButtonBase>
        </Card>
    );
}
