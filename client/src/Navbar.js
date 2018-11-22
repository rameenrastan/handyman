import React from 'react';
import './Navbar.css';

const Navigation = props => (
    <header className = 'NavigationHead'>
        <nav className = 'Navigationbar'>
        <div className = 'NavigationMainMenu'><a href="/">Handyman</a></div>
        <div className = 'spacer'></div>
        <div className ='NavigationItems'>
                <ul>
                    <li><a href='/'>Create Job Posting</a></li>
                    <li><a href='/postings'>Job Postings</a></li>
                </ul>
            </div>
        <div className = 'spacer'></div>
            <div className ='NavigationItems'>
                <ul>
                    <li><a href='/profile'>Profile</a></li>
                    <li><a href='/'>Log Out</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Navigation;