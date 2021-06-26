import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "300px",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  wrapIcon: {
    display: "inline-flex",
  },
  linkIcon: {
    color: "#30800D",
    marginTop: "3px",
  },
  actions: {
    flexDirection: "row",
    verticalAlign: "middle",
    justifyContent: "space-between",
  },
}));
