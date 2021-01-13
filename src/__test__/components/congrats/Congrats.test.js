import React from 'react';
import Congrats from '../../../components/congrats/Congrats';
import {mount} from 'enzyme';
import {findByTestAttr,checkProps} from '../testUtils/commonFuntion';

const defaultProps={
    success:false,
}
/**
 * @function setup
 * @param {*} props 
 * @returns {mounted component}
 */
const setup=(props={})=>{
   const setUpProps={...defaultProps, ...props}
    return  mount(<Congrats {...setUpProps}/>)
}

test('component renders without any error',()=>{
 const wrapped=setup({success:false});
 const congratsComponent=findByTestAttr(wrapped,'congrats-component');
 expect(congratsComponent.length).toBe(1);
})

test('renders no text when `success `prop is false',()=>{
 const wrapped=setup({success:false});
 const congratsComponent=findByTestAttr(wrapped,'congrats-component');
 console.log(congratsComponent.text())
 expect(congratsComponent.text()).toBe("");
})

test('renders non-empty congrats messages when `success` prop is true',()=>{
    const wrapped=setup({success:true});
    const message=findByTestAttr(wrapped,'congrats-message')
    expect(message.text().length).not.toBe(0);
})

test('does not throw warning with expected props',()=>{
    const expectedProps={success:false}
    checkProps(Congrats,expectedProps);
 })
