import React from 'react'
import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from '@material-ui/core'

import useStyles from './styles.js'

function NewsCard({article: {description,publishedAt,source,title, url, urlToImage}},i) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className = {classes.media} image={urlToImage || 'data:image/webp;base64,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'} />
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">
                        {(new Date(publishedAt)).toDateString()}

                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">
                        {source.name}
                    </Typography>
                </div>
                <Typography className= {classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                {/* <Typography variant="h5" color="textSecondary"> {i+ 1}</Typography> */}
            </CardActions>
        </Card>
    )
}

export default NewsCard
