import React, { Component } from 'react';
import './Letter.scss';

const letter = props =>{
    return (
        <button className="letter" id={props.letter} onClick={props.onClick}>{props.letter}</button>
    );
}

export default letter;