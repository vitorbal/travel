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

App.defaultProps = {
    // TODO: make sure uuids are unique
    travels: [
        {
            uuid: '11938298353534',
            city: 'Madrid',
            country: 'Spain',
            startDate: '2015-10-15',
            endDate: '2015-10-19',
            image: '/cities/madrid.jpg'
        },
        {
            uuid: '11938298529524',
            city: 'Amsterdam',
            country: 'Holland',
            startDate: '2015-11-26',
            endDate: '2015-11-30',
            image: '/cities/madrid.jpg'
        }
    ]
};
