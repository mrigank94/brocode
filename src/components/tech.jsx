import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        width: 345,
        minHeight: 200,
        margin: 10,
        padding: 10
    },
    cardContent: {
        backgroundColor: '#f5f5f5'
    },
    media: {
        height: 140,
    },
});

export default function Tech({techName, techDescription, noOfCollaborators}) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent classes={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        <div className='d-flex flex-row justify-content-between'>
                            {techName}
                            <button className='btn btn-success'>{noOfCollaborators}</button>
                        </div>

                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {techDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Join
                </Button>
            </CardActions>
        </Card>
    );
}