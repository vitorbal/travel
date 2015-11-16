import React, { Component } from 'react';

export default class TripTeaser extends Component {
    render() {
        return (
            <div>
                <span>{this.props.city}</span>, <span>{this.props.country}</span>
            </div>
        );
    }
}
