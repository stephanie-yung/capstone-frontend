import React from "react";
import Tilt from 'react-tilt';
import './Logo.css';
import star from './coffee.png';

const Logo = () => {
    return(
        <div>
            <Tilt style={{ height: 150, width: 150 }} >
                <div>
                    <img style={{paddingTop:'20px'}} src={star} alt='logo'/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;