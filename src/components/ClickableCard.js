import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        margin:10,
    },

    content: {
        alignContent: 'center',

    },
});

export default function SimpleCard(props) {
    const classes = useStyles();
    const history = useHistory();

    const navigateTo = () => history.push(props.URL)

    return (
        <Card className={classes.root}>
            <ButtonBase 
                className={classes.content}
                onClick={navigateTo}
            >
                <CardContent className={classes.content}>
                    <Typography className={classes.content}>
                        {props.children}
                    </Typography>
                </CardContent>
            </ButtonBase>
        </Card>
    );
}