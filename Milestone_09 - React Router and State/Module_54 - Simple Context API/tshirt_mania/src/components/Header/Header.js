import React from 'react';
import './Header.css';
import { useResolvedPath, useMatch, Link } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color: match ? "brown" : "black" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

const Header = () => {
    return (
        <nav>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/orderreview">Order Review</CustomLink>
        </nav>
    );
};

export default Header;