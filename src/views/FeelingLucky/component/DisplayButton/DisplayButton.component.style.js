import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "300px",
    marginTop: theme.spacing(1),
  },
  iconButtonContainerLeft: {
    display: "flex",
    justifyContent: "flex-start",
  },
  iconButtonContainerRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  favorite: {
    color: "#74ce94",
  },
  cross: {
    color: "#e76d5c",
  },
}));
