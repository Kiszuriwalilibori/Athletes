

import React from 'react'

import PropTypes from 'prop-types'

import RadioData from '../../fixtures/data-radio'
import './index.styl'
import { 
   
    Disciplines,
    Tagi,
    updateSet
   
        } from '../../libs/calculate'
 
import Radio from '../../components/RadioBis'
import ClickableButton from '../../components/Buttons'
import DisciplineImage from '../../components/Photo'
import Sport from '../../components/Sport'
import SingleCheckBox from '../../components/CheckBox'


export default class Predictions extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        isDisciplinetheTeamOne: 'null',
        isSortNameAscending: false,
        isSortScoreAscending: false,
        isSortScoreRequired: false,
           
        };
  

    this.handleChangeTeam = this.handleChangeTeam.bind(this);
    this.handleChangeTag = this.handleChangeTag.bind(this);
    this.handleSortByName = this.handleSortByName.bind(this);
    this.handleSortByScore = this.handleSortByScore.bind(this);
    this.handleUpdateSelectedCheckboxes = this.handleUpdateSelectedCheckboxes.bind(this); 
}
componentWillMount () {

    this.Disciplines=Disciplines.CreatefromTableofObjects(this.props.disciplines);
    this.state.selectedCheckboxes = new Set(['All/Filtered']);
    this.ListOfTags=Tagi.CreatefromTable(this.Disciplines.getProperty('tags'));

}

handleUpdateSelectedCheckboxes(tag){
    const tagList=this.state.selectedCheckboxes;
    updateSet(tag,tagList);
    this.setState({selectedCheckboxes:tagList});

    }

handleChangeTeam(event) {
    this.setState({isDisciplinetheTeamOne:event.target.value })
}

handleChangeTag(event) {
    this.setState({
        tag: event.target.value
    });
}
handleSortByName() {
    this.Disciplines.Sorting(this.state.isSortNameAscending,'name');
    this.setState({isSortNameAscending: !this.state.isSortNameAscending})  
}

handleSortByScore() {
    this.Disciplines.Sorting(this.state.isSortScoreAscending, 'score')
    this.setState({isSortScoreAscending: !this.state.isSortScoreAscending})
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////
render() {


//const DisciplinesFiltrationStrainer = {tag: this.state.tag, team: this.state.isDisciplinetheTeamOne}
const DisciplinesFiltrationStrainer = {tag: this.state.selectedCheckboxes, team: this.state.isDisciplinetheTeamOne}

//const DisciplinesFiltrationStrainer = {tag: this.state.selectedCheckboxes, team: this.state.isDisciplinetheTeamOne}
const prop_dataRadio = RadioData;
//const prop_TagList = [text.tagListNeutral].concat(this.Disciplines.getUniqueProperty('tags'))

const ContainerFor = {
    FilterSection:(props)=> {return (<div className=' header-flexible flex-column  border-primary rounded my-3 p-1 shadow p-3  bg-white rounded'>{props.children}</div>)},
    SortSection:(props)=> {return (<div className=' header-flexible border-secondary rounded my-3 p-1 shadow-lg p-3  bg-white rounded '>{props.children}</div>)},
    Checkbox:(props)=>{return(<div className='d-flex flex-wrap justify-content-between'>{props.children}</div>)},
    MainSection:(props)=> {return (<div id='predictions' className='l-section c-predictions'>{props.children}</div>)},
    Content:(props)=> {return (<div className='content'>{props.children}</div>)}
    }   

const headerClass = "header d-flex align-items-center justify-content-center";

this.Disciplines.addScoreProperty(this.props.athlete.skillset);

let FilteredDisciplines =this.Disciplines.PerformFiltration(DisciplinesFiltrationStrainer);

const v=this.props.isVisible;

const CheckBox=()=>{ return(this.ListOfTags.getAllTags.map((element)=><SingleCheckBox key ={element.tag} tag={element.tag} fn={this.handleUpdateSelectedCheckboxes} tagList={this.state.selectedCheckboxes} />))}
  
const Header=()=>{return(<h2 className= {headerClass} ><span>Predictions</span></h2>)}
return this.props.isVisible?(

<ContainerFor.MainSection>
    <Header />
<ContainerFor.FilterSection>

    <Radio dataRadio={prop_dataRadio} isTeam={this.state.isDisciplinetheTeamOne} fn={this.handleChangeTeam} />
    <ContainerFor.Checkbox>
    <CheckBox />
    </ContainerFor.Checkbox>
   
</ContainerFor.FilterSection>

<ContainerFor.SortSection>
    <ClickableButton text='Sort by Name' fn={ this.handleSortByName} visibility={true} />
    <ClickableButton text='Sort by Score' fn={ this.handleSortByScore} visibility={true} />
</ContainerFor.SortSection>

<ContainerFor.Content>
        {FilteredDisciplines.map((discipline) => { return (
        <div key={discipline.name} className="c-discipline ">
            <DisciplineImage discipline={discipline} />
            < Sport discipline={discipline} skillset={this.props.athlete.skillset} disciplines={this.props.disciplines} />
        </div>
    ) })}
   
</ContainerFor.Content>                                   
</ContainerFor.MainSection>

):null
}
}

Predictions.propTypes = {
    athlete: PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        skillset: PropTypes.objectOf(PropTypes.number).isRequired,
        nativeDisciplines: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    disciplines: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        isIndividual: PropTypes.bool.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        requirements: PropTypes.objectOf(PropTypes.number).isRequired,
    })).isRequired
}