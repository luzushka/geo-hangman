import React from 'react';
import livesLogos from '../static/lives';

const lives = props =>{
    const {lives} = props;
    return (
        <img src={lives>0?livesLogos[lives]:livesLogos[0]} style={{marginLeft: "-50px"}} />
    );
}

export default lives;