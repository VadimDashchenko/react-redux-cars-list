import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserList } from '../../selectors/user';
import userShape from '../../shapes/user';
import axios from 'axios';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    withStyles
} from '@material-ui/core';
import *as userActions from '../../actions/user';


const styles = () => ({
    content:{
      display: 'flex',
      justifyContent: 'center',
    },
    card: {
        maxWidth: 400,
        minWidth: 300,
        margin: 100,
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    },
    media: {
        paddingTop: '90%',
    },
});

class UserDetail extends Component {

    static propTypes = {
        user: PropTypes.arrayOf(userShape).isRequired,
        classes: PropTypes.object.isRequired
    };

    componentDidMount(){
    const { fetchUser } = this.props;
    axios.get('/user.json')
        .then(({data}) => fetchUser(data))
    };

    render(){
        const { user,  classes } = this.props;
        return (
            <div className={classes.content}>
                {user.map(({id, name, years, city, picture, email, github }) => (
                    <Card className={classes.card} key={id}>
                        <CardMedia
                            className={classes.media}
                            image={picture}
                        />
                        <CardContent>
                            <Typography component="span">
                                {name} , {years} лет
                            </Typography>
                            <Typography component="span">
                                {city}
                            </Typography>
                            <Typography component="span">
                                {email}
                            </Typography>
                            <Typography component="span">
                                {github}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
   user: getUserList(state)
});

export default connect(
    mapStateToProps,
    userActions
)(withStyles(styles)(UserDetail));