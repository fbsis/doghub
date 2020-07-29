import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import {
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Button
} from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        maxWidth: 480,
        marginBottom: 50
    },
    media: {
        height: 300,
        width: "100%"
    },
    tags: {
        textAlign: "center",
    },
    tag: {
        margin: 5,
        alignSelf: "center",
        borderColor: "#000"
    }
});

function DetailsDog({ id, name, temperament }) {
    const classes = useStyles();

    const tags = temperament.split(",");

    const handlerClick = () => {
        console.log("next page");
    }

    return (
        <Card className={classes.root} onClick={handlerClick}>
            <CardActionArea>
                <CardMedia className={
                    classes.media
                }
                    image={require(`../../assets/images/${id}.jpg`)}
                />

                <CardContent>
                    <Typography variant="h6" component="h2">
                        {name}
                    </Typography>

                    <div className={classes.tags}>
                        {tags.map((value, index) => (
                            <Button size="small" variant="outlined" color="primary" className={classes.tag} key={index} component="div"  >
                                {value}
                            </Button>
                        ))}
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default DetailsDog;
