import React from 'react';
import logo from './../assets/icons/laptop-coding.png';

class Navbar extends React.Component {
    render(){
        return(
            <div>
                <div className="navbar">
                <div className="logo">
                    <img src={logo} alt='logo'></img>
                </div>
                <div className="navbar-right">
                    <div>
                        1. About
                    </div>
                    <div>
                        2. experience
                    </div>
                    <div>
                        3. Work
                    </div>
                    <div>
                        4. Contact
                    </div>
                    <div id="btn">
                        <button id="btn-real">
                            Resume
                        </button>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Navbar;