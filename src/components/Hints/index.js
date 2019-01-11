/**
  * Container for two othercomponents displaying best and worst options for an athlete
 */

import React from 'react'

//import { Collapse } from 'react-bootstrap';
import PropTypes from 'prop-types'
import './index.styl'
import AvoidOrTry from '../../components/AvoidOrTry'

export default class Hints extends React.Component {
render(){

const DisciplinesToAvoid = this.props.Avoid
const DisciplinesToTry = this.props.Try

const ContainerForHints=(props)=>{return(<div className='content' id='hints'>{props.children}</div>)}

const HeaderFor={
    Hints:<h2 className="header d-flex align-items-center justify-content-center" ><span>Hints...</span></h2>, 
    Avoid: <h2 className="l-header hints-worst-color" ><span>Should Avoid</span></h2>, 
    Try:<h2 className="l-header hints-best-color" ><span>Should Try</span></h2>
};
return this.props.isVisible?(
                     <ContainerForHints>
                       {HeaderFor.Hints}
                        {HeaderFor.Avoid}
                        <AvoidOrTry DisciplinesToAvoidOrTry = {DisciplinesToAvoid} color={'hints-worst-color'} />
                        {HeaderFor.Try}
                        <AvoidOrTry DisciplinesToAvoidOrTry = {DisciplinesToTry} color={'hints-best-color'} />
                    </ContainerForHints>
                  
):null
}
}



   
Hints.propTypes=
{Avoid:PropTypes.arrayOf(PropTypes.shape({
        isIndividual: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        requirements: PropTypes.objectOf(PropTypes.number).isRequired,
        score: PropTypes.number.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
       
    })).isRequired,
     Try:PropTypes.arrayOf(PropTypes.shape({
        isIndividual: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        requirements: PropTypes.objectOf(PropTypes.number).isRequired,
        score: PropTypes.number.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
       
    })).isRequired

}






























