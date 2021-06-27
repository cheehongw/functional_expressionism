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
    height: theme.spacing(13),
    width: theme.spacing(13),
  },
  status: {
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
