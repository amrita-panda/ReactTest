import React from 'react';
import {mount, shallow} from 'enzyme';
import {findByTestAttr} from '../testUtils/commonFuntion';
import Input from '../../../components/input/Input';
import Root from '../../../Root';



const setUp =(initialState={})=>{
    let wrapper =mount(
    <Root initialState={initialState}>
        <Input />   
    </Root>)
    return wrapper;
}
describe('render',()=>{

    describe('word has not been guessed',()=>{
        let wrapper;
        beforeEach(()=>{
            const initialState={success:false};
            wrapper=setUp(initialState);
        })
        test('renders component without error',()=>{
            const inputComponent =findByTestAttr(wrapper,'component-input');
            expect(inputComponent.length).toBe(1);
        })
        test('renders input box',()=>{
            const inputBox =findByTestAttr(wrapper,'input-box');
            expect(inputBox.length).toEqual(1);

        })
        test('renders submit button',()=>{
            const submitButton =findByTestAttr(wrapper,'submit-button');
            expect(submitButton.length).toEqual(1);
        })
    })

    describe('word has been guessed',()=>{
        let wrapper;
        beforeEach(()=>{
            const initialState={success:true};
            wrapper=setUp(initialState);
        })
        test('renders component without error',()=>{
            const inputComponent=findByTestAttr(wrapper,'component-input');
            expect(inputComponent.length).toEqual(1);
        })
        test('does not render input box',()=>{
            const inputBox =findByTestAttr(wrapper,'input-box');
            expect(inputBox.length).toEqual(0);
        })
        test('does not render submit button',()=>{
            const submitButton =findByTestAttr(wrapper,'submit-button');
            expect(submitButton.length).toEqual(0);
        })

    })
 
})
describe('update state',()=>{

})

describe('redux props',()=>{
    test('has success piece of state as props',()=>{
        const initialState={success:true};
        const wrapper=setUp(initialState)
       //const successProp=wrapper.instance().props
       //expect(successProp).toBe(initialState);
       console.log(wrapper.debug());

        
    })
})