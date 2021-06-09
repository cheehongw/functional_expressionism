import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    marginBottom: theme.spacing(2),
  },
  google: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  email: {
    marginTop: theme.spacing(0.5),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export { useStyles };
