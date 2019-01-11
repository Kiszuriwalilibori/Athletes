/**
 * Component displays disciplines with lowest & highest scores for the given athlete.
 */

import React from 'react'
import PropTypes from 'prop-types'
import './index.styl'
import Photo from '../../components/Photo'
import Sport from '../../components/Sport'
export default class AvoidOrTry extends React.Component{

render(){
const ImportantDisciplines = this.props.DisciplinesToAvoidOrTry;
const borderColor =()=>{return(this.props.color=='hints-best-color')?'hints-best-border':'hints-worst-border';}
const wrapperStyle= 'rounded m-1 mb-3 p-1 shadow p-3  bg-white rounded '
const boxStyle=  `c-discipline ${this.props.color}`
return(<div className= {` ${wrapperStyle} ${borderColor()}`} > {ImportantDisciplines.map((discipline) =>{
        
return (

<div key ={discipline.name} className= {boxStyle}>
        <Photo discipline={discipline} />
        <Sport discipline={discipline} />
</div>

        )
        })}
        </div>
         )
    }
}






AvoidOrTry.propTypes=
{DisciplinesToAvoidOrTry:PropTypes.arrayOf(PropTypes.shape({
        isIndividual: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        requirements: PropTypes.objectOf(PropTypes.number).isRequired,
        score: PropTypes.number.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
       
    })).isRequired,
     color: PropTypes.string.isRequired,
}

































