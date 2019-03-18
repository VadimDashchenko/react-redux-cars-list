import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CarsList from '../CarsList/index';
import CarDetail from '../CarDetail/index';
import UserList from '../UserDetail/index';
import Header from '../../components/Header/index';
import { connect } from 'react-redux';
import * as carsActions from '../../actions/cars';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

    componentDidMount(){
        const { fetchCars } = this.props;
        axios.get('/cars.json')
            .then(({data}) => fetchCars(data))
    }

    static propTypes = {
        fetchCars: PropTypes.func.isRequired
    };

  render() {
    return (
        <Router>
            <div className="App">
                <div className="App-header">
                    <Header />
                </div>
                <div className="App-content">
                    <Switch>
                        <Route path='/cars_list' component={CarsList} exact/>
                        <Route path='/cars_list/detail' component={CarDetail} />
                        <Route path='/information' component={UserList} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
  }
}

export default connect(
    null,
    carsActions
)(App);