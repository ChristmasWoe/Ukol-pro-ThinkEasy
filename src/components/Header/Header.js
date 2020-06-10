import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id="header">
                <div id="nav-wrapper">

                    <div className="header-button">1</div>
                    <div className="header-button">1</div>
                    <div className="header-button">1</div>
                </div>

            </div>
        )
    }
}

export default Header;