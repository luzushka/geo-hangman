import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import Keyboard from './Keyboard';
import Input from './Input';
import Lives from './Lives';
import {setWord} from '../store/actions/letterInputActions';


class Game extends Component{

    componentDidMount(){
        this.props.setWord();
    }

    render(){
        return (
            <Fragment>
                <Lives lives={this.props.lives}/>
                <Input word={this.props.lives>0?
                            this.props.word
                            :this.props.originalWord}/>
                <Keyboard />
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    word: state.letterInput.editableWord,
    originalWord: state.letterInput.originalWord,
    lives: state.hangman.lives
})

const mapDispatchToProps = dispatch =>({
    setWord: ()=> dispatch(setWord())
})

export default connect(mapStateToProps, mapDispatchToProps)(Game);