import commentsReducer from './Comments';
import { SAVE_REVIEW} from '../actions/Types';

it('handel actions of type',()=>{
   const action={
       type:SAVE_REVIEW,
       payload:'New Review'
   };
   const newState=commentsReducer([],action);
   expect(newState).toEqual(['New Review']);
})

it('handels actions with unknown type',()=>{
   const newState= commentsReducer([],{type:'uakhfkadhk'});
   expect(newState).toEqual([]);
})