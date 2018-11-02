import React, {Component} from 'react';
import './Input.scss'

class Input extends Component{
    componentDidUpdate(){
        if (!this.props.word.includes('_')){
            setTimeout(()=>window.location.href="/", 1000); //game won
        }
    }
    render(){
    return (<div id="keyboard"> {this.props.word} </div>);
    }
    
}

export default Input;