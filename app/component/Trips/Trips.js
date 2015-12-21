import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import TripTeaser from '../TripTeaser/TripTeaser';

import styles from './Trips.css';


const renderSingleTrip = (tripData) => {
    return (
        <li className={ styles.listItem } key={ tripData.uuid }>
            <TripTeaser { ...tripData } />
        </li>
    );
};

const transitionConfig = {
    transitionName: {
        appear: styles.slideInStart,
        appearActive: styles.slideInEnd
    },
    transitionEnterTimeout: 600,
    transitionLeaveTimeout: 0,
    transitionAppear: true,
    transitionAppearTimeout: 600
};

const Trips = (props) => {
    return (
        <ReactCSSTransitionGroup component="ol" className={ styles.list } { ...transitionConfig }>
            { props.trips.map(renderSingleTrip) }
        </ReactCSSTransitionGroup>
    );
};

Trips.propTypes = {
    trips: React.PropTypes.arrayOf(React.PropTypes.shape({
        uuid: React.PropTypes.number.isRequired,
        city: React.PropTypes.string.isRequired,
        country: React.PropTypes.string.isRequired,
        startDate: React.PropTypes.string.isRequired,
        endDate: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired
    }))
};

export default Trips;
