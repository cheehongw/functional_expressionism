import styles from './LocationList.module.css';
import { Chip, ListItem, Typography } from '@material-ui/core';
import ClickableCard from '../../components/ClickableCard.js';

export default function LocationItem(props) {

    const {
        locationName = null,
        locationDesc,
        locationURL,
        locationImage,
        locationCoords,
    } = props;

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
                        label={<Typography> 500m </Typography>}
                    />

                </div>
                {/* <------ end of card content ------> */}
            </ClickableCard>
        </ListItem>)

}