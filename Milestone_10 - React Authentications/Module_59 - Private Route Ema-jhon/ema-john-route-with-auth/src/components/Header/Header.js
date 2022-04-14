import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                
                {
                    user? <Link to="/register"> {user.email} Sign Out</Link> :<Link to="/login">Sign In</Link>
                }
            </div>
        </nav>
    );
};

export default Header;