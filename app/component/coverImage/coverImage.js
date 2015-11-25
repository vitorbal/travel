import React from 'react';

import styles from './coverImage.css';

// TODO: lazy-load
export default (props) => {
    return (
        <img className={ styles.wrapper } src={ props.src } />
    );
};
