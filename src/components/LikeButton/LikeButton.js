import { IconButton } from "@material-ui/core"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { red } from '@material-ui/core/colors';
import styles from './LikeButton.module.css';


export default function LikeButton(props) {

  const {
    onClick = () => { },
    favouriteState = false,
    fontSize = '1.875rem',
  } = props;

  return (
    <IconButton className={`${styles.heart} ${props.className}`} onClick={onClick}>
      {favouriteState
        ? <FavoriteIcon className={`${styles.heart} ${props.className}`} style={{ fontSize: fontSize, color: red[500] }} />
        : <FavoriteBorderIcon className={`${styles.heart} ${props.className}`} style={{ fontSize: fontSize }} />}
    </IconButton>
  )
}