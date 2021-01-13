import {getLetterMatch} from '../../../components/utils/HelperMethod';

describe('getLetterMatchCount',()=>{
    const secretWord='party';
 test('returns the correct count when there are no matching letters',()=>{
    const letterMatchCount =getLetterMatch('bones',secretWord);
    expect(letterMatchCount).toBe(0);
  })

 test('returns the correct count when there is 3 matching letters',()=>{
    const letterMatchCount=getLetterMatch('train',secretWord);
    expect(letterMatchCount).toBe(3); 
 })

 test('returns correct count when there is duplicate letters in the guess',()=>{
    const letterMatchCount=getLetterMatch('parka',secretWord);
     expect(letterMatchCount).toBe(3);
 })

})