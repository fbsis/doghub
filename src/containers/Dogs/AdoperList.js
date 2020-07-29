import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

import {
    Typography,
    Card,
    CardContent,
    Grid,

} from '@material-ui/core';

import { adopt_remove } from "../../store/dogs/actions";


import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles({
    card: {
        marginBottom: 10
    },
    image: {
        width: 100,
        borderRadius: 10
    },
    name: {
        justifyContent: 'center',
        alignSelf: 'center'
    },
    noDog: {
        alignSelf: 'center',
        marginTop: 10
    },
});

function AdoperList() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { adopt } = useSelector((state) => state.dogs);

    const remove = (dog) => {
        dispatch(adopt_remove(dog));
    }

    return (
        <React.Fragment>
            {adopt.length === 0 && (
                <Typography variant="h6" component="h2" align="center" className={classes.noDog}>
                    Nenhum dog adotado
                </Typography>

            )}

            {adopt.map((value, index) => (
                <Card className={classes.card} key={index}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <img src={require(`../../assets/images/${value.id}.jpg`)} alt={value.name} className={classes.image} />
                            </Grid>
                            <Grid item xs={8} className={classes.name}>
                                <Typography variant="h6" component="h2" >
                                    {value.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={1} >
                                <CloseIcon onClick={() => remove(value)} />
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            ))}

        </React.Fragment>

    );
}

export default AdoperList;
