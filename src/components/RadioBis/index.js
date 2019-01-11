//. Sprawdzic czy nieda sieobejsccstringow
// Obiekt danych musi realizować:


import React from 'react'
import PropTypes from 'prop-types'

export default class Radio extends React.Component{
    
render(){

const dataRadio =this.props.dataRadio;
const isTeam =this.props.isTeam;
return( <div>
 
 <div className="btn-group d-flex justify-content-around" data-toggle="buttons">


  { dataRadio.map((dataradio)=>{return(

            <label htmlFor={dataradio.text} key ={dataradio.text} className = 'btn btn-default active btn-noborder form-check-label label' >
              <input id={dataradio.text}
                className="form-check-input"
                type="radio"
                value= {dataradio.value}
                checked={isTeam == dataradio.value}
                onChange={this.props.fn}
              />
              {dataradio.text}
            </label > 
         )})}
</div>
</div>)}    

}


Radio.propTypes = {
    dataRadio: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,  
    })).isRequired
}
   