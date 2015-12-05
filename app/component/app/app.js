import React, { Component } from 'react';

import TripTeaser from '../tripTeaser/tripTeaser';

import styles from './app.css';

export default class App extends Component {
    renderSingleTrip(tripData) {
        return (
            <li className={ styles.listItem } key={ tripData.uuid }>
                <TripTeaser
                    city={ tripData.city }
                    country={ tripData.country }
                    startDate={ tripData.startDate }
                    endDate={ tripData.endDate }
                    image={ tripData.image } />
            </li>
        );
    }

    render() {
        return (
            <div className={ styles.base }>
                <h1>Travels</h1>
                <ol className={ styles.list }>
                    { this.props.travels.map(this.renderSingleTrip) }
                </ol>
            </div>
        );
    }
}

// TODO: make uuids that are really unique
const getPseudoRandomNumber = () => Math.floor(Math.random() * 1000000000);

// Generate some fixture data
// TODO: use real data
let travels = [];
for (let i = 0; i < 50; i++) {
    travels.push({
        uuid: getPseudoRandomNumber(),
        city: 'Madrid',
        country: 'Spain',
        startDate: '2015-10-15',
        endDate: '2015-10-19',
        image: '/cities/madrid.jpg'
    });
}
App.defaultProps = { travels: travels };
