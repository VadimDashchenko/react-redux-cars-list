import React from 'react';
import { Paper } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Header = () => (
        <Paper square className="Header">
                <NavLink to='/cars_list' activeClassName='Header-link' exact={true}>
                    <h2 className="Header-link-list">Автомобили</h2>
                </NavLink>
                <NavLink to='/information' activeClassName='Header-link'>
                    <h2 className="Header-link-list">Информация</h2>
                </NavLink>
        </Paper>
);

export default Header;