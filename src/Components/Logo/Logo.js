import React from "react";
import Tilt from 'react-tilt';
import './Logo.css';
import star from './coffee.png';
const Logo = () => {
    return(
        <div className='ma3 mt0'>
            {/* <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner" pa3><img style={{paddingTop:'20px'}} src={star} alt='logo'/> </div> */}
            <Tilt options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner" pa3><img  src={star} alt='logo'/> </div>
            </Tilt>
        </div>
    );
}

export default Logo;