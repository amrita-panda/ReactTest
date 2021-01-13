import React from 'react';
import {mount} from 'enzyme';
import Count from '../../../components/counter/Counter';

let wrapped;
beforeEach(()=>{
    wrapped=mount(<Count />)
})
afterEach(()=>{
    wrapped.unmount();
})

test('renders with out error',()=>{
    const counterComponent=wrapped.find("[data-test='component-count']")
    expect(counterComponent.length).toEqual(1);
})

test("render button",()=>{

})

test("render countet display",()=>{

})

test("counter starts at 0",()=>{

})

test("cliking on button increment counter display",()=>{

})

 
