import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.gif';

const Logo = () =>{
    return (
        <div className="ma4 mt0 pa3">
        <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 200, width: 200 }} >
            <div className="Tilt-inner pa3"> 
                <img src={brain} alt='brain logo' />
            </div>
        </Tilt>

    </div>
    );
}

export default Logo;