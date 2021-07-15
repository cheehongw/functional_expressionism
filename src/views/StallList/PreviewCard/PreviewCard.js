import { Button, IconButton, Popover } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import { Rating } from '@material-ui/lab';
import { green, red } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './PreviewCard.module.css'
import { useHistory } from "react-router-dom";
import { useState } from "react";

/**
 * The preview card of a stall.
 * Floated when the user clicks on a stall in StallList
 */
export default function PreviewCard(props) {

  const {
    open = false,
    onClose,
    locationObj,
  } = props

  const { stallObj } = props;

   //import user's favourite state here
  const [favouriteState, setFavouriteState] = useState(false);
  const history = useHistory();

  return (
    <StylesProvider injectFirst> {/* had to use this to make .css files work*/}
      <Popover classes={{ paper: styles.paper }} open={open} onClose={onClose}>

        <div className={styles.div}>
          <p className={styles.stall_title}>
            {stallObj.stallName}
          </p>
          <p className={styles.desc}> {stallObj.desc ? stallObj.desc : `@${locationObj.locationName}`} </p>
        </div>

        <IconButton className={styles.heart} onClick={()=>{setFavouriteState(!favouriteState)}}>
          {favouriteState 
          ? <FavoriteIcon className={styles.heart} style={{fontSize: '1.875rem', color: red[500]}} />
          : <FavoriteBorderIcon className={styles.heart} style={{fontSize: '1.875rem'}} /> }
        </IconButton>

        <img className={styles.img} src={stallObj.stallImage} alt={stallObj.stallName} />
        <Rating className={styles.rating} value={stallObj.rating} precision={0.1} size='small' readOnly />

        <ul className={styles.statusList}>
          <StatusItem text="Currently Open" icon={StatusIcons(true)} />
          <StatusItem text="Certified Halal" icon={StatusIcons(stallObj.isHalal)} />
        </ul>

        <Button
          classes={{ text: styles.view_menu }}
          onClick={() => {
            history.push({
              pathname: `/stall/${stallObj._id}`,
              state: props.locationObj
            })
          }}
        >View Menu</Button>

      </Popover >
    </StylesProvider>
  )

}

const StatusItem = (props) => {
  const { text, icon } = props;
  return (
    <li>
      <div className={styles.subitem}>

        <p className={styles.subitem_text}>{text}</p>
        <div className={styles.subitem_icon}>{icon}</div>
      </div>
    </li>

  )
}

const StatusIcons = (status) => {
  if (status === null || status === undefined) {
    return 'Unknown/Info missing'
  } else if (status) {
    return <CheckIcon style={{ color: green[500] }} />
  } else if (!status) {
    return <CloseIcon style={{ color: red[500] }} />
  }
}