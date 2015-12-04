import React from 'react';
import moment from 'moment';

import CoverImage from '../coverImage/coverImage';

import styles from './tripTeaser.css';

const DATE_FORMAT = 'D MMM YYYY'; // "13 Nov 2015"

// TODO: show year of startDate only when it's different from year of endDate
const renderDuration = (startDate, endDate) => {
    const start = moment(startDate);
    const end = moment(endDate);
    const startFormatted = start.format(DATE_FORMAT);
    const endFormatted = end.format(DATE_FORMAT);
    const duration = end.diff(start, 'days');

    return (
        <p>{ startFormatted } - { endFormatted } ({ duration } { duration > 1 ? 'days' : 'day' })</p>
    );
};

const tripTeaser = (props) => {
    return (
        <div className={ styles.wrapper }>
            <div className={ styles.coverImageWrapper }>
                <CoverImage src={ props.image }/>
            </div>

            <div className={ styles.contentWrapper }>
                <h3>{ props.city }, { props.country }</h3>
                { renderDuration(props.startDate, props.endDate) }
            </div>
        </div>
    );
};

export default tripTeaser;
