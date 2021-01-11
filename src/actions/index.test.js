import {saveReview} from './index';
import {SAVE_REVIEW} from './Types';

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