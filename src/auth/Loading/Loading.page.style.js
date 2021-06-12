import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  circular: {
    marginLeft: theme.spacing(3.5),
  },
}));

export { useStyles };
