
import React from 'react'

export default class CollapsibleButton extends React.Component{
    
render(){
 return (<button className="button" data-toggle="collapse" data-target={this.props.target}role="button" > {this.props.text}</button>)
}}
