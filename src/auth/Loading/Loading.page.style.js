import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loading: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
  },
}));

export { useStyles };
