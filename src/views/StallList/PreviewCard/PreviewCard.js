import { Button, Popover } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import { Rating } from '@material-ui/lab';
import styles from './PreviewCard.module.css'
import { useHistory } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { StatusIcons } from '../../../components/StatusIcons';
import { LikeButton } from '../../../components/LikeButton';
import { AuthContext } from "../../../auth/use-auth";

/**
 * The preview card of a stall.
 * Floated when the user clicks on a stall in StallList
 */
export default function PreviewCard(props) {

  const {
    open = false,
    onClose,
    locationObj,
    stallObj,
  } = props

  const { currentUser } = useContext(AuthContext);
  //import user's favourite state here
  const [favouriteState, setFavouriteState] = useState(localStorage.getItem(`${stallObj._id}_like`) ? true : false);

  useEffect(() => {
    if (currentUser) {
      currentUser?.getIdToken()
        .then(contactServer("GET", stallObj))
        .then(res => res.json())
        .then(res => setFavouriteState(res));
    }
  }, [currentUser, stallObj]);


  const [mutex, setMutex] = useState(false);

  const handleFavourite = () => {

    if (!currentUser) { //not logged in
      if (favouriteState) {
        localStorage.removeItem(`${stallObj._id}_like`);
        setFavouriteState(false)
      } else {
        localStorage.setItem(`${stallObj._id}_like`, "1");
        setFavouriteState(true)
      }
    } else { //logged in
      if (!mutex) { //calls are asynchronous for logged in users, hence mutex
        setMutex(true);

        favouriteState
          ? currentUser?.getIdToken()
            .then(contactServer("DELETE", stallObj))
            .then(() => {
              setFavouriteState(false);
              setMutex(false)
            })
          : currentUser?.getIdToken()
            .then(contactServer("POST", stallObj))
            .then(() => {
              setFavouriteState(true);
              setMutex(false)
            })
      }
    }
  }

  const history = useHistory();

  return (
    <StylesProvider injectFirst> {/* had to use this to make .css files work*/}
      <Popover classes={{ paper: styles.paper }} open={open} onClose={onClose}>

        <div className={styles.div}>
          <p className={styles.stall_title}>
            {stallObj.stallName}
          </p>
          <p className={styles.desc}> {stallObj.desc ? stallObj.desc : `@${locationObj?.locationName}`} </p>
        </div>

        <LikeButton className={styles.heart}
          favouriteState={favouriteState}
          onClick={handleFavourite}
        />

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
              state: {
                locationObj: locationObj,
                stallObj: stallObj
              }
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

/**
 * A factory function.
 * 
 * @param {String} method The HTTP method to send. Choose between GET, POST, DELETE
 * @param {Object} stallObj The stallObject
 * @returns A function
 */
function contactServer(method, stallObj) {
  return idToken => {
    return fetch( //http://localhost:3000, {
      `https://functional-expressionism-api.herokuapp.com/stalls/${stallObj._id}/like`, {
      method: method,
      headers: {
        'Authorization': `Bearer ${idToken}`
      }
    })
  }
}