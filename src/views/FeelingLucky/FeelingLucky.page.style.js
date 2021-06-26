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
  marginTop5: {
    marginTop: theme.spacing(5),
  },
  marginTop2: {
    marginTop: theme.spacing(2),
  },
  marginTop1: {
    marginTop: theme.spacing(1),
  },
}));

export default useStyles;
