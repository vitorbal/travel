import React from 'react';

export default function TripTeaser(props) {
    return (
        <div>
            <span>{props.city}</span>, <span>{props.country}</span>
        </div>
    );
}
