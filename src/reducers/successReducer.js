import {CORRECT_GUESS} from '../actions/Types';
export default (state=false,action)=>{
 switch(action.type){
     case CORRECT_GUESS:
         return true;
     default:
         return state;    
 }
 
}