
import React from 'react'

export default class Photo extends React.Component{
    
render(){


    const handleShowSport =(ev)=> {
        const el = ev.target;
        const element = el.nextSibling;
        const visible = element.classList.contains('c-discipline__content-v');
          if (visible == true) {
            element.classList.remove('c-discipline__content-v');
            element.classList.add('c-discipline__content-h')
        } else {
            element.classList.remove('c-discipline__content-h');
            element.classList.add('c-discipline__content-v')
        }
    
    }

    const discipline =this.props.discipline
    
    return(<img key={discipline.name}src={`${discipline.photo}`} alt={ `${discipline.name}`} onClick={handleShowSport} className='sport-icon hvr-buzz' />)}}