import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    withStyles,
    CardMedia,
    CardContent,
    Typography,
    Button
} from '@material-ui/core';
import { connect } from 'react-redux';
import carShape from '../../shapes/car';
import { currentCar} from "../../selectors/cars";
import { branch, renderNothing, compose } from 'recompose';
import *as carsActions from '../../actions/cars';
import { NavLink } from 'react-router-dom';

const styles = (theme) => ({
    content: {
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        maxWidth: 400,
        minWidth: 300,
        margin: 40,
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    },
    media: {
        paddingTop: '90%',
    },
    button: {
        margin: theme.spacing.unit,
    },
    link: {
        textDecoration: 'none',
        color: 'secondary',
        colorText: 'secondary'
    }
});

const enhance = compose(
    connect((store => ({
        car: currentCar(store),
    })),
    carsActions),
    branch(({ car }) => typeof car === 'undefined', renderNothing),
);

class CarDetail extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        car: carShape.isRequired,
        redirectToList: PropTypes.func.isRequired
    };

    handleClick = () => {
      const { redirectToList } = this.props;
        redirectToList();
    };

    render(){
        const { classes, car:{id, title, image, model, price, year, location}, } = this.props;
        return (
            <div >
                    <Button
                        className={classes.button}
                        color="secondary"
                        onClick={this.handleClick}
                    >
                        <NavLink to="/cars_list" className={classes.link}>
                            Back to lists
                        </NavLink>
                    </Button>
                <div className={classes.content}>
                    <Card className={classes.card} key={id} >
                        <CardMedia
                            className={classes.media}
                            image={image}
                        />
                        <CardContent>
                            <Typography variant="h6" component="h2">
                                {title}
                            </Typography>
                            <Typography component="p">
                                {model}
                            </Typography>
                            <Typography component="p">
                                {year}
                            </Typography>
                            <Typography component="p">
                                цена: {price}
                            </Typography>
                            <Typography component="p">
                                {location}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>

        );
    }
}

export default enhance(withStyles(styles)(CarDetail));