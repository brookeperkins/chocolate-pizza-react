import React from 'react';
import Logo from '../src/title.js';

class Header extends React.Component {
    render() {
        return <header className="Header">
            <h1>Delicious</h1>
            <h2>The Best Food Blog on the Web</h2>
            <nav>
                {this.props.logo}
            </nav>
        </header>
    }
}

export default Header;