/**
 *Component responsible for page layout 
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import Profile from '../../components/Profile'
import Overview from '../../components/Overview'
import Predictions from '../../components/Predictions'
import Hints from '../../components/Hints'
import MyButton from '../../components/Buttons'
import { Disciplines } from '../../libs/calculate'


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            counter: 0,
            athletesLenght: 0,
            isPredictionsVisible: false,
            isHintsVisible: false,
            isOverviewVisible: false,
            
        };
        this.handleNextAthlete = this.handleNextAthlete.bind(this);
        this.handlePreviousAthlete = this.handlePreviousAthlete.bind(this);
        this.handlePredictionsVisibility=this.handlePredictionsVisibility.bind(this);
        this.handleHintsVisibility=this.handleHintsVisibility.bind(this);
        this.handleOverviewVisibility=this.handleOverviewVisibility.bind(this);
        }
    

componentWillMount () {
    this.Disciplines=Disciplines.CreatefromTableofObjects(this.props.disciplines);
   
}
handlePredictionsVisibility(){
    this.setState({isPredictionsVisible:!this.state.isPredictionsVisible});
}

handleHintsVisibility(){
    this.setState({isHintsVisible:!this.state.isHintsVisible});
    
    //window.location.hash = "#hints";
}

handleOverviewVisibility(){
    this.setState({isOverviewVisible:!this.state.isOverviewVisible});
}
    handleNextAthlete() {

        if (this.state.counter < this.props.athletes.length - 1) {
            let c = this.state.counter;
            this.setState({
                counter: c + 1
            })
        };;

    }
    handlePreviousAthlete() {
        if (this.state.counter >= 1) {
            let c = this.state.counter;
            this.setState({
                counter: c - 1
            })
        };;
    }
    render() {
       
        let counter =this.state.counter;
        const athlete = this.props.athletes ? this.props.athletes[counter] : null
        const disciplines = this.props.disciplines ? this.props.disciplines : []
 

this.Disciplines.addScoreProperty(athlete.skillset);

let DisciplinesWithoutNatives = Disciplines.CreatefromTableofObjects(this.Disciplines.getPurgedOf('name',athlete.nativeDisciplines))

const DisciplinesToAvoid = DisciplinesWithoutNatives.getOutermostElements(3,'score', true);

const DisciplinesToTry = DisciplinesWithoutNatives.getOutermostElements(3,'score',false);


const ContainerFor={

SectionChoiceButtons:(props)=>{return (<div className=' header-flexible justify-content-around flex-row flex-wrap border-secondary rounded m-1 p-1 shadow-lg p-3  bg-white rounded' >{props.children}</div>)},
Profile:(props)=>{return (<div className='p-home'>{props.children}</div>)},
Buttons:(props)=>{return (<div className='header-flexible' >{props.children}</div>)},
 
}

if (athlete) return (
<div>
    <ContainerFor.Buttons>
        <MyButton text='<<< Previous' fn={ this.handlePreviousAthlete} visibility={counter !==0 }  />
        <MyButton text='Next >>>' fn={ this.handleNextAthlete} visibility ={counter+1 !== this.props.athletes.length}/>
    </ContainerFor.Buttons>
    <ContainerFor.Profile>
        <Profile {...athlete} />
        <ContainerFor.SectionChoiceButtons>
            <MyButton text='Predictions' fn={ this.handlePredictionsVisibility} visibility={true} />
            <MyButton text='Hints' fn={ this.handleHintsVisibility} visibility={true} />
            <MyButton text='Overview' fn={ this.handleOverviewVisibility} visibility={true} />
        </ContainerFor.SectionChoiceButtons>
        <Overview {...athlete} isVisible={this.state.isOverviewVisible } />
        <Predictions athlete={athlete} disciplines={disciplines} isVisible={ this.state.isPredictionsVisible } />
        <Hints Avoid={DisciplinesToAvoid} Try={DisciplinesToTry} isVisible={ this.state.isHintsVisible } />
    </ContainerFor.Profile>
</div>
            )
        else return <span>No athlete data</span>
    } 
}

Home.propTypes = {
    athletes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        skillset: PropTypes.objectOf(PropTypes.number).isRequired,
        nativeDisciplines: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
    disciplines: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        isIndividual: PropTypes.bool.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        requirements: PropTypes.objectOf(PropTypes.number).isRequired,
    })).isRequired
}