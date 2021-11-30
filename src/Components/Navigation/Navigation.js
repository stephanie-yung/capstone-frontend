import React from 'react';
// using function made on app.js, just switches through the pages with user auth atm
const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end',  height: '80px'}}>
          <p style={{color: "#00754a", }} onClick={() => onRouteChange('signout')} className=' ma4 f3 link dim b white pa1 pointer'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end', padding:'20px'}}>
          <p style={{color: "#00754a" }} onClick={() => onRouteChange('signin')} className='f3 link dim white b pa3 pointer'>Sign In</p>
          <p  style={{color: "#00754a",}} onClick={() => onRouteChange('register')} className='f3 link dim white b pa3 pointer'>Register</p>
        </nav>
      );
    }
}

export default Navigation;