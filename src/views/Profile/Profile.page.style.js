import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/ProfileBackground.jpg";

export const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  paper: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "20vh",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "bottom",
    backgroundSize: "contain",
    height: "25vh",
    display: "flex",
  },
}));
