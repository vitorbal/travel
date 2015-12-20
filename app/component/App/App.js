import React, { Component } from 'react';

import Trips from '../Trips/Trips';

import styles from './App.css';

export default class App extends Component {
    render() {
        return (
            <div className={ styles.base }>
                <h1>Travels</h1>
                <Trips trips={ this.props.trips } />
            </div>
        );
    }
}

App.propTypes = {
    trips: React.PropTypes.array
};

// Generate some fixture data
// TODO: use real data
// TODO: make uuids that are really unique
const getPseudoRandomNumber = () => Math.floor(Math.random() * 1000000000);

let trips = [];
for (let i = 0; i < 50; i++) {
    trips.push({
        uuid: getPseudoRandomNumber(),
        city: 'Madrid',
        country: 'Spain',
        startDate: '2015-10-15',
        endDate: '2015-10-19',
        image: '/cities/madrid.jpg'
    });
}
App.defaultProps = { trips: trips };
