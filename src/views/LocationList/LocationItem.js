import styles from './LocationItem.module.css';
import { Chip, LinearProgress, ListItem, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import ClickableCard from '../../components/ClickableCard.js';
import unitsToString from '../../utils/unitsToString.js'
import haversine from 'haversine-distance';
import convert from 'convert-units';

/**
 * LocationItem in LocationList
 * 
 * @param {Object} props The values associated with the location
 * @returns JSX component
 */
export default function LocationItem(props) {

    const {
        currPos,
        toolTip = 'Rating',
    } = props;

    const {
        locationName = null,
        //locationDesc = null,
        locationURL = null,
        locationImage = null,
        locationCoords,
        rating = 0,
        _id,
    } = props.locationObj


    let labelContent;

    if (toolTip === 'Rating' || toolTip === 'Alphabetical') {
        labelContent = <Rating value={rating} precision={0.1} size='small' readOnly />
    } else if (toolTip === 'Distance') {
        labelContent = currPos === undefined
            ? <LinearProgress className={styles.progress} />
            : <Typography className={styles.distanceTypography}>
                {unitsToString(convert(haversine(locationCoords, currPos)).from('m').toBest())}
            </Typography>
    }

    return (
        <ListItem>
            <ClickableCard disablePadding={true} URL={locationURL}>
                {/* <------- start of card content ------> */}
                <div className={styles.div}>
                    <img className={styles.cardImage}
                        src={locationImage}
                        alt={locationName} />

                    <span className={styles.name}>
                        <Typography variant='h4' >
                            {locationName}
                        </Typography>
                    </span>

                    <Chip className={styles.toolTip}
                        size='small'
                        label={labelContent}
                    />

                </div>
                {/* <------ end of card content ------> */}
            </ClickableCard>
        </ListItem>)

}