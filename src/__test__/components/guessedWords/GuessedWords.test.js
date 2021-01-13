import React from 'react';
import {mount} from 'enzyme';
import { findByTestAttr,checkProps } from "../testUtils/commonFuntion";
import GuessedWords from '../../../components/guessedWords/GuessedWords';

const defaultProps={
    guessedWords:[{guessedWord:"train",letterMatchCount:3}],
}
const setUp=(props={})=>{
    const setUpProps={...defaultProps,...props}
    return mount(<GuessedWords  {...setUpProps}/>)
}


test('component render without any error',()=>{
    const wrapped =setUp();
    const guessedComponent=findByTestAttr(wrapped,'component-guessed-word');
    expect(guessedComponent.length).toBe(1);
})

test('does not throw warning with expected props',()=>{
    checkProps(GuessedWords,defaultProps)
})

describe('if there are no words guessed',()=>{
    let wrapped;
    beforeEach(()=>{
         wrapped =setUp();
    })
    test('render without error',()=>{
        const guessedComponent=findByTestAttr(wrapped,'component-guessed-word');
        expect(guessedComponent.length).toBe(1);
    })

    test('render instuction to guess a word',()=>{
        const instructionText=findByTestAttr(wrapped,'guessed-instruction');
        expect(instructionText.text).not.toBe("");
    })
})

describe('if there are words guessed',()=>{
    let wrapped
   let guessedWords=[
        {guessedWord:'Train',letterMatchCount:3},
        {guessedWord:'agile',letterMatchCount:1},
        {guessedWord:'party',letterMatchCount:5},
    ];
    beforeEach(()=>{
         wrapped=setUp({guessedWords})
    })
 test('renders without error',()=>{
    const guessedComponent=findByTestAttr(wrapped,'component-guessed-word');
    expect(guessedComponent.length).toBe(1);
 })
 test('render `guessed words` section',()=>{
  const guessedWordsArray=findByTestAttr(wrapped,'guessed-words');
  expect(guessedWordsArray.length).toBe(1);
 })
 test('correct number of guessed words',()=>{
      const guessedWordsArray=findByTestAttr(wrapped,'guessed-word');
      expect(guessedWordsArray.length).toBe(guessedWords.length)

 })
})