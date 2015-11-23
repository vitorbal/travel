import React from 'react';

import styles from './coverImage.css';

// TODO: lazy-load
const CoverImage = (props) => {
    return (
        <img className={ styles.wrapper } src={ props.src } />
    );
};

export default CoverImage;
