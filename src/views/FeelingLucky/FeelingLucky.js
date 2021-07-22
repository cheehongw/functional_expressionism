import {
  Typography,
  useMediaQuery,
  Modal,
  Button,
  Fade,
  Backdrop,
} from "@material-ui/core";
import ClickableCard from "../../components/ClickableCard";
import Header from "../../components/Header";
import { useStyles } from "./FeelingLucky.page.style";
import { ReactComponent as DiceIcon } from "../../assets/dice.svg";
import { ReactComponent as DeliciousIcon } from "../../assets/delicious.svg";
import { useState } from "react";

function FeelingLucky() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:500px)");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <Typography classsName={classes.modalTitle1} variant="h4">
        Overview
      </Typography>
      <Typography variant="body1">
        We will generate 7 dish suggestions based on which mode you pick here:
      </Typography>
      <Typography variant="body1">
        <strong>Random</strong> will provide you with totally random dishes that
        you have not tried before.
      </Typography>
      <Typography variant="body1">
        <strong>Our top picks</strong> is a feature for registered users. We
        will the recommend the best dish for you in our opinion here.
      </Typography>
      <Typography className={classes.modalTitle} variant="h4">
        How to use
      </Typography>
      <Typography variant="body1">
        Swipe <strong>left</strong> to discard the suggestion.
      </Typography>
      <Typography variant="body1">
        Swipe <strong>right</strong> to retain the suggestion.
      </Typography>
      <Typography variant="body1">
        The retained suggestions will reappear on the next cycle of cards. The
        session will end when you decide on the last suggestion.
      </Typography>
    </div>
  );

  return (
    <div>
      <Header />
      <div className={classes.title}>
        <Typography className={classes.text} component="h1">
          Suggestion modes
        </Typography>
      </div>

      <div className={classes.btnContainer}>
        <Button color="secondary" onClick={handleOpen}>
          First time? Here's how to use this feature
        </Button>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>{body}</Fade>
        </Modal>
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
              Our top picks
            </Typography>
            <DeliciousIcon className={classes.icon} />
          </div>
        </ClickableCard>
      </div>
    </div>
  );
}

export default FeelingLucky;
