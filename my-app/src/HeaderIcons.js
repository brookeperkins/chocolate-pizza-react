import React from 'react';
import HeaderImg from '../src/data.js';

class HeaderIcons extends React.Component {
    render() {
        return <img src={this.props.src} alt="social media icon" />
    }
}

export default HeaderIcons;