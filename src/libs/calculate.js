

import {flatten, cloneDeep, intersection, groupBy, take, takeRight,  sortBy, values} from "lodash"
import fp from 'lodash/fp'
import _ from "lodash";







/** 
 *  
 * Method for calculating score for individual skill
 * @param {number} personalSkill skill value of an athlete
 * @param {number} requirement skill value requirement of a discipline
 */
export const skillScore = (personalSkill, requirement) => {
    return (personalSkill - requirement) * requirement * 2;
}

/**
 * Method for calculating score for an athlete in specific discipline
 * @param {object} athleteSkillset object with an athlete skillset
 * @param {object} disciplineRequirements object with an discipline requirements
 */
export const disciplineScore = (athleteSkillset, disciplineRequirements) => {
    let score = 50;
    for (let skill of Object.keys(athleteSkillset))
        score += skillScore(athleteSkillset[skill], disciplineRequirements[skill]);
         return score;
}


export const disciplineTabRequirements= (current, athlete, disciplines)=>{let tab=[];
    let requirements = disciplines.map((d)=>d.requirements)
    for (let x of requirements) tab.push(disciplineScore(athlete,x));
return (current==Math.max(...tab))? true: false;
   }

   export const isBestScore = (current, athlete, disciplines)=>{let tab=[];
    let requirements = disciplines.map((d)=>d.requirements)
    for (let x of requirements) tab.push(disciplineScore(athlete,x));
return (current==Math.max(...tab))? true: false;
   }


   export const isWorstScore = (current, athlete, disciplines)=>{let tab=[];
    let requirements = disciplines.map((d)=>d.requirements)
    for (let x of requirements) tab.push(disciplineScore(athlete,x));
return (current==Math.min(...tab))? true: false;
   }

   export const BestScore = (athlete, disciplines)=>{let tab=[];
    let requirements = disciplines.map((d)=>d.requirements)
    for (let x of requirements) tab.push(disciplineScore(athlete,x));
return Math.max(...tab);
   }


   export const WorstScore = (athlete, disciplines)=>{let tab=[];
    let requirements = disciplines.map((d)=>d.requirements)
    for (let x of requirements) tab.push(disciplineScore(athlete,x));
return Math.min(...tab);
   }

   
/**
 * Method to get from nested (1 level) table flattende tables without duplicates
 * @param {table} a table
 * 
 */



export function unique(a) {
  
let flattened =flatten(a);
    return flattened.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}
  

/**
 * Method to get from sorted table  all elements from count-first positions by sorting index incl. duplicates
 * @param {number} count  number of positions by sorting index
 * @param {table} table  previously sorted table being subject to this function
 */



export const updateSet=(element, set)=> { set.has(element)? set.delete(element): set.add(element);}




/**
 * Method for filtration of table of objects
 * @param {object} test  object with filtration criteria
 * @param {table} table  table to be filtered
 */





/**
 * Method for sort of table of objects by strings
 * @param {boolean} logical  decides about srting order
 * @param {table}   array  table to be sorted
 */
/*
export const sortByName =(logical, array)=> {
    
    array.sort((a, b)=>{
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();

        if (logical){
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;}
        else{
        if (x < y) {return 1;}
        if (x > y) {return -1;}
        return 0;}})
   return array;}

*/


/**
 * Method for sort of table of objects by numerical values
 * @param {boolean} logical  decides about sorting order
 * @param {table}  array table to be sorted 
 */
/*
export const sortByScore =(logical,array)=> {
   
    array.sort((a, b)=>{
        var x = a.score;
        var y = b.score;

        if (logical){
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;}
        else{
        if (x < y) {return 1;}
        if (x > y) {return -1;}
        return 0;}})
   return array;}
*/




   export const sort =(logical, array, key)=> {
    
    array.sort((a, b)=>{
        if (typeof(a) == 'string'){
        var x = a[key].toLowerCase();
        var y = b[key].toLowerCase();
        }
        else 
        {var x = a[key];
        var y = b[key]}


        if (logical){
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;}
        else{
        if (x < y) {return 1;}
        if (x > y) {return -1;}
        return 0;}})
   return array;}









/**
 * Method to add new property to all objects in  table of objects 
 * @param {boolean} logical  decides about sorting order
 * @param {table}  array table to be sorted 
 */

export const AddScore =(Dyscypliny)=>{
   for(let d of Dyscypliny) {
    d.score= disciplineScore(this.props.athlete.skillset,d.requirements)
} return Dyscypliny;}


/**
 * Checks whether certain skill is the best skill of an athlete
 * @param {number} number  given number that is tested by comparison with max number found in range
 * @param {table}  array table that contains numbers for comparison
 */
 

export const  isBestSkill = (number, obj)=>{ 
        let Max= (ob)=>{return Math.max(...Object.values(ob))}
        
        return number==Max(obj)}
      
/**
 * Checks whether certain skill is the worst skill of an athlete
 * @param {number} number  given number that is tested by comparison with max number found in range
 * @param {table}  array table that contains numbers for comparison
 */
 
      
export const  isWorstSkill = (number, obj)=>{ 
        
      let Min=(ob)=>{return Math.min(...Object.values(ob))}
        
          return number==Min(obj)}
      
  
/**
 * That function gives back string depending on input logical value
 * @param {number} number  given number that is tested by comparison with max number found in range
 * @param {table}  array table that contains numbers for comparison
 */    
      
export const individualOrTeam = (logical) =>{return (logical)? 'Individual Sport':'Team Sport'}

export class Tags {
    constructor(tags) {
        this.tags = tags;
         }

      static makeTagsFromTable (table) {
              
        return new Tags(['All/Filtered'].concat(uniq(table)));
      }

      get getTags(){return this.tags;}
}

export const colors =['Burlywood','Cadetblue','Coral','Crimson','DarkKhaki','DarkSalmon']

export class Tagi {
    constructor() {
        this.members = [{
            tag: 'All/Filtered',
            color: 'Aquamarine',
            isMarked: true
        }];
       //this.handleTagMarking = this.handleTagMarking.bind(this);
       this.getColourOfTag = this.getColourOfTag.bind(this);
    }

add(x) {
        this.members.push(x);
    }
    

    static CreatefromTable(table) {
        const tags = new Tagi();
        const shortened = unique(table);

        shortened.forEach(element => {
            const record = {
                tag: element,
                color: colors[shortened.indexOf(element)],
                isMarked: false
            };
            tags.add(record)
        });
        return tags;

    }


getColourOfTag(tag){
const temporaryArray =cloneDeep(this.members);
const wanted = temporaryArray.filter(element=>{element.tag==tag})
return wanted.color;   
}
get getAllTags() {

    const temporaryArray =cloneDeep(this.members);
        return temporaryArray;
    }

get getTags() {
    const temporaryArray =cloneDeep(this.members);
    return temporaryArray;
    }
    
  }



export class Disciplines {
    constructor() {
        this.members = [];
        this.tags =[]
        this.getProperty = this.getProperty.bind(this)
        this.addScoreProperty = this.addScoreProperty.bind(this)
        this.sort = this.sort.bind(this)
        this.getPurgedOf =this.getPurgedOf.bind(this)
        this.PerformFiltration = this.PerformFiltration.bind(this)
        this.Sorting =this.Sorting.bind(this)
        this.getOutermostElements = this.getOutermostElements.bind(this)
        
    }

    add(x) {
        this.members.push(x);
    }
    addTag(x){
    this.tags.push(x)
}
    getDuplicate() {
    return cloneDeep(this.members);
    }

//TODO przerobić na foreach
    static CreatefromTableofObjects(table) {
        let newDisciplines = new Disciplines();

        for (let value of table) {
            newDisciplines.add(value);
            newDisciplines.addTag(value.tag);
        }
        return newDisciplines;

    }
    get getAllDisciplines() {
        return this.getDuplicate(this.members);
           }


getProperty(name) {
   
    const OldArray= this.getDuplicate(this.members);
    const NewArray = OldArray.map(element=>element[name]);
    return NewArray;
}

    getUniqueProperty(name) {
        const tab = this.getProperty(name);
        return unique(tab);
    }


getOutermostElements(count, name, order){
// order decides whether top elements should be taken from top or bottom of the table resulting from groupBy
const array = this.getDuplicate(this.members);
const score =(element)=>{return element[name];}

//poniżej właściwie przykłady wykorzystania funkcji lodasha na różne sposoby. Pierwszy załatwia wynik komponentu. Zwrocić uwagę na importy u góry strony koniecznie.

const left =fp.flow(
    fp.groupBy(score),
    fp.values,
    fp.take(count),
    fp.flatten
    );
    
    const right =fp.flow(
    fp.groupBy(score),
    fp.values,
    fp.takeRight(count),
    fp.flatten
    );
  /*   
const blue = _(array)
.groupBy(score)
.values()
.take(count)
.flatten()
.value();
*/
class ValueMappable {
    constructor (object) {
      this.object = object
    }
    map (f) {
      const mapped = { }
      for (const key of Object.keys(this.object)) {
        mapped[key] = f(this.object[key])
      }
      return new ValueMappable(mapped)
    }
  };

  const addThree = (x) => x + 3
const myData = { myAge: 22, friendAge: 21 };
const myDataFunctor = new ValueMappable(myData);
console.log (myDataFunctor);
const threeYearsLaterFunctor = myDataFunctor.map(addThree);
const threeYearsLater = threeYearsLaterFunctor.object;


console.log(threeYearsLater);











var Alt = (array,order,count)=>{const result = (order)? _.take(array, count): _.takeRight(array, count)  ;return result; };

_.mixin({
    Alt: Alt
});


const returnMe = _.chain(array)
.groupBy(score)
.values()
.Alt(order,count)
.flatten()
.value();
console.log (returnMe);


    const result = (order)=>{return (order)? left(array):right(array);}
/*    
return result(order);
 */

 return returnMe;
             }
     
     
     
             

        




PerformFiltration(test) {

const array = this.getDuplicate(this.members);    
const checkIndividual =(discipline)=>{return  ((String(discipline.isIndividual) == test.team)||(test.team=='null')) ; }
const checkTag = (discipline)=> {return(test.tag.has('All/Filtered'))? true: intersection(discipline.tags, [...test.tag] ).length !== 0; }
const filterInput = (discipline)=>{return(checkIndividual(discipline)&&checkTag(discipline))};

const result = array.filter(filterInput);

return result;
}



//foreach TODO
addScoreProperty(skillset) {
    for (let x of this.members) {
        x.score = disciplineScore(skillset, x.requirements)
    }
}

getPurgedOf(name, sieve) {
    let result = [];
    result = this.members.filter(function (el) {
        return !sieve.includes(el[name])
    })
    return result;

}




Sorting (logical, key){
const getType=(k)=>{return typeof(this.members[0][k])} 

const sorts={
'string': (logical, key)=>{
this.members.sort((a, b) => {
var x = a[key].toLowerCase();
var y = b[key].toLowerCase();

            if (logical) {
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            } else {
                if (x < y) {
                    return 1;
                }
                if (x > y) {
                    return -1;
                }
                return 0;
            }
        })
    }

,

'number': (logical, key)=>{
this.members.sort((a, b) => {
var x = a[key];
var y = b[key];

            if (logical) {
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            } else {
                if (x < y) {
                    return 1;
                }
                if (x > y) {
                    return -1;
                }
                return 0;
            }
        })
    }
}

sorts[getType(key)](logical,key);

}


sort(logical, key) {

        this.members.sort((a, b) => {
            if (typeof (a) == 'string') {
                var x = a[key].toLowerCase();
                var y = b[key].toLowerCase();
            } else {
                var x = a[key];
                var y = b[key]
            }


            if (logical) {
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            } else {
                if (x < y) {
                    return 1;
                }
                if (x > y) {
                    return -1;
                }
                return 0;
            }
        })
    }


};


