import styles from './StallItem.module.css';
import { Chip, ListItem, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import ClickableCard from '../../../components/ClickableCard.js';
import { PreviewCard } from '../PreviewCard'
import { useState } from 'react';

/**
 * StallItem in StallList
 * 
 * @param {Object} props The values associated with the stall
 * @returns JSX component
 */
export default function StallItem(props) {

    const { 
        toolTip = 'Rating',
        locationObj } = props;

    const {
        stallName = null,
        stallImage = null,
        rating = 0,
        price = null,
    } = props.stallObject

    const [isOpen, setIsOpen] = useState(false);

    let labelContent;

    if (toolTip === 'Rating' || toolTip === 'Alphabetical') {
        labelContent = <Rating value={rating} precision={0.1} size='small' readOnly />
    } else if (toolTip === 'Price') {

        labelContent = //change this
            <Typography className={styles.distanceTypography}>
                {/* some function that translate average price to range */
                console.log(price)}
                $ - $$$
            </Typography>

    }

    return (
        <ListItem>
            <PreviewCard 
                open={isOpen} 
                onClose={() => setIsOpen(false)} 
                stallObj={props.stallObject} 
                locationObj={locationObj} />

            <ClickableCard disablePadding={true} onClick={() => setIsOpen(true)} >
                {/* <------- start of card content ------> */}
                <div className={styles.div}>
                    <img className={styles.cardImage}
                        src={stallImage}
                        alt={stallName} />

                    <span className={styles.name}>
                        <Typography variant='h4' >
                            {stallName}
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