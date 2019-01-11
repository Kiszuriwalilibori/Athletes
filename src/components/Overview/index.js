/**
 * Component for displaying basic info about the provided athlete. 
 */

import React from 'react'
import PropTypes from 'prop-types'
import './index.styl'
import {isBestSkill, isWorstSkill} from '../../libs/calculate'

export default class Overview extends React.Component {
render() {
const ContainerFor ={
    MainSection:(props)=> {return (<section className=' l-section c-overview '>{props.children}</section>)},
    Content:(props)=>{return (<div className='content'>{props.children}</div>)},
    Skills:(props)=>{return (<div className=' header-flexible flex-row border-secondary rounded m-1 p-1 shadow-lg p-3  bg-white rounded '>{props.children}</div>)},
        }
 
const headerStyle =  "header d-flex align-items-center justify-content-center";   
const Header=()=>{return(<h2 className= {headerStyle} ><span>Overview</span></h2>)}
const images={upperBody: require('../../images/upperbody.png'), lowerBody:require('../../images/lowerbody.png') , aesthetics:require('../../images/aesthetics.png') , agility: require('../../images/agility.png'), endurance: require('../../images/endurance.png')}
const skills= this.props.skillset;

      
return this.props.isVisible? (
<ContainerFor.MainSection>
    <Header />
    <ContainerFor.Content>
        <span className="label">Bio</span>
        <p className="bio">{this.props.bio}</p>
        <span className="label">Skillset</span>
        <ContainerFor.Skills>
            {Object.keys(skills).map((skill) => { const colorclassforBest = isBestSkill(skills[skill],skills)? 'greeen':''; const colorclassforWorst
            =isWorstSkill(skills[skill],skills)? 'worst-color':'' ; return (
            <div className='list' key={skill} tabIndex="0" data-toggle="tooltip" data-placement="bottom" role="tooltip" title={`${skill}`}>
                <div className={` p-2 rounded ${colorclassforBest} ${colorclassforWorst} `}>
                    <img className={ `icon-size` } src={images[skill]}/>
                    <span className='label'> {`: ${skills[skill]}`}</span>
                </div>
            </div>
            ) })}
        </ContainerFor.Skills>
    </ContainerFor.Content>
</ContainerFor.MainSection>
         ):null
    }
}

Overview.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    skillset: PropTypes.objectOf(PropTypes.number).isRequired,
    nativeDisciplines: PropTypes.arrayOf(PropTypes.string).isRequired,
}
