import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch, dispatch } from "react-redux";

import {
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Button
} from '@material-ui/core';
import { getDog } from "../../store/dogs/actions";


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
        textAlign: "center"
    },
    tag: {
        margin: 5,
        alignSelf: "center",
        borderColor: "#000",
        color: "#6C6C6C",
        fontWeight: "bold",

    },
    adopterButtom: {
        marginTop: 10,
        backgroundColor: "#6C6C6C",
        color: "#FFFFFF",
        fontWeight: 700,
        height: 50,
        fontSize: 18
    },
    caracterist: {
        fontWeight: "bolder",
        color: "#6C6C6C",
    }
});

function DetailsDog(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getDog(id));
    }, [dispatch, id]);

    const { dog } = useSelector((state) => state.dogs);

    if (dog.id === undefined) {
        return false;
    }

    let {
        name,
        life_span,
        bred_for,
        breed_group,
        temperament,
        weight,
        height
    } = dog;

    const tags = temperament.split(",");


    return (
        <Card className={
            classes.root
        }
        >
            <CardMedia className={
                classes.media
            }
                image={
                    require(`../../assets/images/${id}.jpg`)
                } />

            <CardContent>
                <Typography variant="h6" component="h2">
                    {name} </Typography>

                <div className={
                    classes.tags
                }>
                    {
                        tags.map((value, index) => (
                            <Button size="small" variant="outlined" color="primary"
                                className={
                                    classes.tag
                                }
                                key={index}
                                component="div">
                                {value} </Button>
                        ))
                    } </div>

                <div >
                    <Typography className={classes.caracterist}>
                        Life Span: {life_span} </Typography>
                    <Typography className={classes.caracterist}>
                        Bred For: {bred_for} </Typography>
                    <Typography className={classes.caracterist}>
                        Bred For: {bred_for} </Typography>
                    <Typography className={classes.caracterist}>
                        Bred group: {breed_group} </Typography>
                    <Typography className={classes.caracterist}>
                        height: {height.metric} </Typography>
                    <Typography className={classes.caracterist}>
                        weight: {weight.metric} </Typography>
                </div>
                <Button variant="contained" fullWidth className={classes.adopterButtom} onClick={() => console.log("adotar")}>
                    Adotar
                </Button>
            </CardContent>
        </Card>
    );
}

export default DetailsDog;
