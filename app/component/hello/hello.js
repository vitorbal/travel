import React, { Component } from 'react';

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = { count: props.initialCount };
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <h1 onClick={this.increment.bind(this)}>Hello, {this.state.count} {this.props.name}!</h1>
        );
    }
}

Hello.defaultProps = {
    name: 'World',
    initialCount: 0
};
