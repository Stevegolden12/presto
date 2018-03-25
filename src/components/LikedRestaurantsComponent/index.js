import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../custom_components/NavBar';
import SideNav from '../custom_components/SideNav';
import LikedRestaurant from '../custom_components/LikedRestaurant';
import {purple_main} from "../../resources/colors";

const LikedRestaurantsComponent = props => {
    const styles = {
        reservations: {
            fontWeight: 'lighter',
            color: purple_main,
            margin: '80px 30px 0 90px'
        },
        likedRestaurants: {
            margin: '8px auto'
        }
    };

    const renderLikedRestaurants = restos => restos.map(resto => (
        <LikedRestaurant style={styles.likedRestaurants} resto={resto} />
    ));
    const items = [
        { name: 'Home', route: '/customer'},
        { name: 'Liked Restaurants', route: '/customer/liked'},
        { name: 'Reservations', route: '/customer/reservations'}
    ];

    return (
        <div>
            <NavBar
                fullName={props.loggedInUser !== null
                    ? `${props.loggedInUser.user.first_name} ${props.loggedInUser.user.last_name}`
                    : 'Fustat Fargin'}
            />
            <SideNav
                items={items}
                history={props.history}
                route={props.route}
            />

            <div style={{ marginLeft: 200 }}>
                <div>
                    <h1 style={styles.reservations}>Liked Restaurants</h1>
                </div>
                <div style={{ maxWidth: '80%', margin: 50}}>
                {props.restaurants !== undefined && props.restaurants.length > 0
                ? renderLikedRestaurants(props.restaurants)
                : <p style={{ color: '#616161', fontSize: 14 }}>* No Liked Restaurants found! Try checking a few out.</p>}
                </div>
            </div>
        </div>
    )
};

LikedRestaurantsComponent.propTypes = {
    route: PropTypes.string,
    history: PropTypes.object,
    restaurants: PropTypes.array,
    loggedInUser: PropTypes.object
};

export default LikedRestaurantsComponent;
