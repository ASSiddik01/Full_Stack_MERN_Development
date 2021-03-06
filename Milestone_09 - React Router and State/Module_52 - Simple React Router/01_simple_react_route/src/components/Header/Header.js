import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav>
            {/* <Link to='/'>Home</Link> */}
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/friend'>Friend</CustomLink>
            <CustomLink to='/posts'>Post</CustomLink>
            <CustomLink to='/countries'>Countries</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </nav>
    );
};

export default Header;