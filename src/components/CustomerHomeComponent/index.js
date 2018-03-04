import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import { Button } from 'reactstrap';

import NavBar from '../custom_components/NavBar';
import RestaurantCard from '../custom_components/RestaurantCard';
import ReservationCard from '../custom_components/ReservationCard';

const CustomerHomeComponent = props => {

    return (
        <div>
            <NavBar fullName="Rawad Karam"/>
            <h2 style={{ margin: '40px auto' }} className="mainTitle"> Nearby Restaurants </h2>

            <div id="card-wrapper">
                <Button className="circle-button" id="dislike">
                    <Glyphicon style={{ color: 'white' }} glyph="thumbs-down" />
                </Button>

                <RestaurantCard
                    style={{ alignSelf: 'center' }}
                    restaurantName="Bob's Burger"
                    phoneNumber="514-577 5424"
                    postalCode="H3J0A9"
                />

                <Button className="circle-button" id="like">
                    <Glyphicon style={{ color: 'white' }} glyph="thumbs-up" />
                </Button>
            </div>

            <ReservationCard />
        </div>
    );
};

CustomerHomeComponent.propsTypes = {
    handleCustRsvClicked: PropTypes.func,
    handleSettingsClicked: PropTypes.func

};

export default CustomerHomeComponent;