import React, { Component } from 'react';

import TripTeaser from '../TripTeaser/TripTeaser';

import styles from './App.css';

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

App.propTypes = {
    travels: React.PropTypes.arrayOf(React.PropTypes.shape({
        uuid: React.PropTypes.number.isRequired,
        city: React.PropTypes.string.isRequired,
        country: React.PropTypes.string.isRequired,
        startDate: React.PropTypes.string.isRequired,
        endDate: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired
    }))
};

// Generate some fixture data
// TODO: use real data
// TODO: make uuids that are really unique
const getPseudoRandomNumber = () => Math.floor(Math.random() * 1000000000);

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
