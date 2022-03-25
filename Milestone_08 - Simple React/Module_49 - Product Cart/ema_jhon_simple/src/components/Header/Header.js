import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        // Step 1
        <nav className='header'>
            <img src={logo} alt="" />
            <div className="mainmenu">
                <a href="/orders">Orders</a>
                <a href="/reviews">Order Reviews</a>
                <a href="/inventory">Manage Inventory</a>
            </div>
        </nav>
    );
};

export default Header;