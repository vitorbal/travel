import React from 'react';

import CoverImage from '../coverImage/coverImage';

import styles from './tripTeaser.css';

export default function TripTeaser(props) {
    return (
        <div className={ styles.wrapper }>
            <div className={ styles.coverImageWrapper }>
                <CoverImage src={ props.image }/>
            </div>

            <div className={ styles.contentWrapper }>
                <h3>{ props.city }, { props.country }</h3>
                <p>{ props.startDate } - { props.endDate }</p>
            </div>
        </div>
    );
}
