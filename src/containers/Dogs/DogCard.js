import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

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
        borderColor: "#000",
        color: "#6C6C6C",
        fontWeight: "bold",
    }
});

function DetailsDog({ id, name, temperament }) {
    const classes = useStyles();
    const history = useHistory();

    const tags = temperament.split(",");

    const handlerClick = (id) => {
        history.push(`/detail/${id}`);
    }

    return (
        <Card className={classes.root} onClick={() => handlerClick(id)}>
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
