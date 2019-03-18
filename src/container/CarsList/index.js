import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import carShape from '../../shapes/car';
import *as carsActions from '../../actions/cars';
import { Redirect } from 'react-router-dom';
import { getCurrentViewableCarID, getCarsList, showDetail } from '../../selectors/cars';
import {
    withStyles,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography,
 } from '@material-ui/core';

const styles = () => ({
    list: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection:'column'
    },
    root: {
        // width: '100%',
        // display: 'flex',
        // justifyContent: 'center',
        // wrap: 'flexWrap',
        maxWidth: 360,
        marginBottom: 15,
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
     },
    // inline: {
    //     display: 'inline',
    // },
    content: {
        maxWidth: 50
    }
});

class CarsList extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        carsList: PropTypes.arrayOf(carShape).isRequired,
        getCurrentViewableCarById: PropTypes.func.isRequired,
        redirectToDetail: PropTypes.func.isRequired
    };

    handleShowClick = ({target}) => {
        const { getCurrentViewableCarById, redirectToDetail } = this.props;
        getCurrentViewableCarById(target.dataset.carId);
        redirectToDetail();
    };

    render(){
        const { classes, carsList, redirect } = this.props;
        return(
            <div className={classes.list}>
                <h2>Cars list</h2>
                {redirect === true && <Redirect to='/cars_list/detail' />}
                {carsList.map(({id, title, model, image}) => (
                         <List
                             className={classes.root}
                             key={id}
                             data-car-id={id}
                             onClick={this.handleShowClick}
                         >
                             <ListItem className={classes.content} >
                                 <ListItemAvatar>
                                     <Avatar src={image} />
                                 </ListItemAvatar>
                                 <ListItemText
                                     primary={title}
                                     secondary={
                                         <React.Fragment>
                                             <Typography component="span" className={classes.inline} color="textPrimary">
                                                 {model}
                                             </Typography>
                                         </React.Fragment>
                                     }
                                 />
                             </ListItem>
                         </List>
                        )
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    carsList: getCarsList(state),
    setCarById: getCurrentViewableCarID(state),
    redirect: showDetail(state)
});

export default connect(
    mapStateToProps,
    carsActions
)(withStyles(styles)(CarsList))