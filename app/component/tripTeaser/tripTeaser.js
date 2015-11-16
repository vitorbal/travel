import React from 'react';

import styles from './tripTeaser.css';

export default function TripTeaser(props) {
    return (
        <div className={ styles.base }>
            <h3>{ props.city }, { props.country }</h3>
            <p>{ props.startDate } - { props.endDate }</p>
        </div>
    );
}
