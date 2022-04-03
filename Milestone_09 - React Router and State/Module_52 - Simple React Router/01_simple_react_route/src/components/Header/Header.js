import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/friends'>Friend</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </nav>
    );
};

export default Header;