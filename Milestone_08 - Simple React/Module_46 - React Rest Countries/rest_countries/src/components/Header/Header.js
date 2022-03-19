import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h1>Welcome to React</h1>
            <nav className="menu">
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/About">About Us</a>
            </nav>
        </div>
    );
};

export default Header;