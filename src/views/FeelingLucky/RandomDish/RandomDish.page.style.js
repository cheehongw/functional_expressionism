import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
  },
  swipeable: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
  },
  icon: {
    marginTop: theme.spacing(1),
    height: "10vh",
    width: "10vh",
  },
  status: {
    marginBottom: theme.spacing(1),
    fontFamily: "Merriweather Sans",
    fontSize: "2em",
  },
  loading: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
  },
  statusContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

export default useStyles;
