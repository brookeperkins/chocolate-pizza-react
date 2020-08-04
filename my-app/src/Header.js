import React from 'react';

class Header extends React.Component {
    render() {
        return <header className="Header">
        <h1>Delicious</h1>
        <h2>The Best Food Blog on the Web</h2>
        <nav>
            <img src='../assets/logo.png'/>
        </nav>
        </header>
    }
}

export default Header;