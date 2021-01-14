import {saveReview,correctGuess} from './index';
import {SAVE_REVIEW} from './Types';
import { CORRECT_GUESS } from "./Types";

describe('saveReview',()=>{
 it('Has the correct type',()=>{
    const action=saveReview();
    expect(action.type).toEqual(SAVE_REVIEW);
 });

 it('Has the correct Payload',()=>{
    const action=saveReview('New Review');
    expect(action.payload).toEqual('New Review')
 });
 
})

describe('correctGuess',()=>{

   test('returns an action with type `CORRECT_GUESS` ',()=>{
      const action=correctGuess();
      expect(action).toEqual({type:'CORRECT_GUESS'})
   })
})