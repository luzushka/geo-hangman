import React, { Component } from 'react';
import lettersArray from '../utils/letters';
import Letter from './Letter';
import {connect} from 'react-redux';
import {hangmanActions, letterInputActions} from '../store/actions';


class Keyboard extends Component{

    setKeyPressEvents = () =>{
        lettersArray.forEach(letter=>{
            document.addEventListener('keypress', e=>{
                document.querySelector("#"+String.fromCharCode(e.keyCode).toUpperCase()).click();
            })
        })
    }

    onClick = (letter, event) =>{
        const hasLetter = this.props.word.includes(letter);
        if (!hasLetter){
            this.props.addOrgans();
            if (this.props.lives===1){ //game over
                setTimeout(()=>window.location.href="/", 1000);
            }
        }

        else{
            this.props.addLetter(letter);
            
        }

        event.target.disabled = true;
        
    };

    componentDidMount(){
        this.setKeyPressEvents();
    }

    render() {
        
        return (<div>{lettersArray.map(letter=>
            (<Letter
                letter={letter}
                key={letter}
                onClick={e=>this.onClick.call(this, letter, e)}/>))}</div>);
    }
}
const mapDispatchToProps = dispatch =>({
    addLetter: letter=> dispatch(letterInputActions.addLetter(letter)),
    addOrgans: ()=> dispatch(hangmanActions.addOrgans())
});

const mapStateToProps = state =>({
    word: state.letterInput.originalWord,
    lives: state.hangman.lives
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);