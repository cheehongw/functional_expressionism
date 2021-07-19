import { Typography, useMediaQuery } from "@material-ui/core";
import ClickableCard from "../../components/ClickableCard";
import Header from "../../components/Header";
import { useStyles } from "./FeelingLucky.page.style";
import { ReactComponent as DiceIcon } from "../../assets/dice.svg";
import { ReactComponent as DeliciousIcon } from "../../assets/delicious.svg";

function FeelingLucky() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:500px)");

  return (
    <div>
      <Header />
      <div className={classes.title}>
        <Typography className={classes.text} component="h1">
          Pick a suggestion mode
        </Typography>
      </div>
      <div className={matches ? classes.laptopOptions : classes.options}>
        <ClickableCard URL="/suggestions/random">
          <div className={classes.cardContent}>
            <Typography className={classes.cardText} variant="h6">
              Random
            </Typography>
            <DiceIcon className={classes.icon} />
          </div>
        </ClickableCard>

        <ClickableCard URL="/suggestions">
          <div className={classes.cardContent}>
            <Typography className={classes.cardText} variant="h6">
              Suggestions
            </Typography>
            <DeliciousIcon className={classes.icon} />
          </div>
        </ClickableCard>
      </div>
    </div>
  );
}

export default FeelingLucky;
