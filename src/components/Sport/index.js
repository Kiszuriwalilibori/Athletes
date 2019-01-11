
import React from 'react'
import { 
  
    BestScore,
    WorstScore,
    individualOrTeam,
     
        } from '../../libs/calculate'


export default class Sport extends React.Component{
    
render(){
    
    const discipline =this.props.discipline
    const skillset = this.props.skillset
    const disciplines =this.props.disciplines
    const color =this.props.color
    const colorToggler =(discipline)=>{
if(disciplines){
    let bestscore  = BestScore(skillset,disciplines);
    let worstscore = WorstScore(skillset,disciplines);
    let best = discipline.score == bestscore? 'best-color':'';
    let worst = discipline.score == worstscore? 'worst-color':''
    return best+worst;}
    else
       { return '';}
 }
const IndividualOrTeam =()=>{return( <span className="width-50 width-mobile-100 ">{`${individualOrTeam(discipline.isIndividual)}`}</span>)}
const ContainerFor={
    Tags:(props)=> {return (<div className='d-inline-block width-mobile-100'>{props.children}</div>)},
    NameAndScore:(props)=>{return( <div className={` c-discipline__content-name  p-1 rounded d-flex align-items-center width-mobile-100 ${colorToggler(discipline)}`}>{props.children}</div>)},
    IndividualAndTags:(props)=>{return(<div className='d-flex flex-wrap w-100 flexboxfluent'>{props.children}</div>)},
    WholeContent:(props)=>{return(<div className="c-discipline__content c-discipline__content-v flexboxfluent">{props.children}</div>)},
   
    
}
    
return(
<ContainerFor.WholeContent>
    <ContainerFor.NameAndScore>
        {`${discipline.name} - ${discipline.score}`}
    </ContainerFor.NameAndScore>
   <ContainerFor.IndividualAndTags>
    <IndividualOrTeam />
    <ContainerFor.Tags> {discipline.tags.map((tag, index) =>{return(
        <span key={index}className={ `bordered-${tag} my-1`}>{tag}</span>)})}
    </ContainerFor.Tags>
    </ContainerFor.IndividualAndTags>
</ContainerFor.WholeContent>
)
}}




