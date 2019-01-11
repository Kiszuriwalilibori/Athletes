
import React from 'react'
import PropTypes from 'prop-types'


export default  class SingleCheckBox extends React.Component {
    constructor(props) {
        super(props);
       
        this.changeChecked = this.changeChecked.bind(this);
        }
        changeChecked () {
           
            this.props.fn(this.props.tag);
            
        }
        render(){ 
       
        const tag=this.props.tag;
        const tagList =this.props.tagList;
        const isthisCheckboxChecked =(this.props.tagList).has(this.props.tag);
        
        return(<span key={tag}  > <input id={tag} className ='css-checkbox' type="checkbox" value={tag} checked={isthisCheckboxChecked}  disabled ={tagList.has("All/Filtered")&&(tag!=='All/Filtered')}   onChange = {this.changeChecked}  /><label className= 'css-label mac-style' htmlFor={tag} ><span className='m-1'>{tag}</span></label></span>)}
       
            }

        
   
SingleCheckBox.propTypes = {
    
        fn: PropTypes.func.isRequired,
        tag: PropTypes.string.isRequired,  
    
}.isRequired
   
























    