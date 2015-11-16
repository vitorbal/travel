import React, { Component } from 'react';
import TripTeaser from '../tripTeaser/tripTeaser';

import styles from './app.css';

export default class App extends Component {
    renderSingleTrip(tripData) {
        return (
            <li className={styles.listItem} key={tripData.uuid}>
                <TripTeaser city={tripData.city} country={tripData.country} />
            </li>
        );
    }

    render() {
        return (
            <div>
                <h1>Travels</h1>
                <ol className={styles.list}>
                    {this.props.travels.map(this.renderSingleTrip)}
                </ol>
            </div>
        );
    }
}

App.defaultProps = {
    // TODO: make sure uuids are unique
    // TODO: use date objects for dates
    // TODO: add pictures
    travels: [
        {
            uuid: '11938298353534',
            city: 'Madrid',
            country: 'Spain',
            startDate: '15 October 2015',
            endDate: '19 October 2015'
        },
        {
            uuid: '11938298529524',
            city: 'Amsterdam',
            country: 'Holland',
            startDate: '26 November 2015',
            endDate: '30 November 2015'
        }
    ]
};