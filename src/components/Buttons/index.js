
import React from 'react'


export default class ClickableButton extends React.Component{
    
render(){
 return this.props.visibility?( <button className="button" onClick={this.props.fn}>{this.props.text}</button>):null}   

}