import React from 'react';
import {mount} from 'enzyme';
import Count from '../../../components/counter/Counter';

let wrapped;
beforeEach(()=>{
    /**
     * To mount the full component including its childrens
     * @enzyme method mount()
     * @returns {mounted component}
     */
    wrapped=mount(<Count />) 
})

afterEach(()=>{
    wrapped.unmount();
})


/**
 * find element depanding onthe value we pass
 * @function findByTestAttr
 * @returns the element with the samen data-test
 */

 const findByTestAttr=(wrapper,val)=>wrapper.find(`[data-test='${val}']`)
 
 test('renders with out error',()=>{
    const counterComponent=findByTestAttr(wrapped,"component-count")
    expect(counterComponent.length).toEqual(1);
})
describe('Increment Button',()=>{
    test("render button",()=>{
        const button= findByTestAttr(wrapped,"increment-button")
        expect(button.length).toEqual(1);
    })
    
    test("render countet display",()=>{
        const counterDisplay = findByTestAttr(wrapped,"increment-display")
        expect(counterDisplay.length).toEqual(1);
    })
    
    test("counter starts at 0",()=>{
      const count=findByTestAttr(wrapped,"count").text();
      expect(count).toBe("0");
    })
    
    test("cliking on button increment counter display",()=>{
        const button= findByTestAttr(wrapped,"increment-button")
        button.simulate('click');
        const count=findByTestAttr(wrapped,"count").text();
        expect(count).toBe('1'); 
    })
})

describe('Decrement Button',()=>{

    test('render decrement Button',()=>{
        const button=findByTestAttr(wrapped,"decrement-button");
        expect(button.length).toBe(1);
    })
    test ('clicking decrement button decrements the counter display when state greater than 0',()=>{
        //first incremet
        const incrementButton=findByTestAttr(wrapped,'increment-button');
        incrementButton.simulate('click');
        //then decement 
        const decrementButton=findByTestAttr(wrapped,"decrement-button")
        decrementButton.simulate('click');
        //and check it
        const countDisplayText=findByTestAttr(wrapped,'count').text();
        expect(countDisplayText).toBe('0');
    })
})

describe('error show when count goes less than 0',()=>{
    test('error does not show when not needed',()=>{
        const errorText=findByTestAttr(wrapped,'error-message');
        const errorhasClass=errorText.hasClass('hide');
        //console.log(wrapped.debug())
        expect(errorhasClass).toBe(true);
    })
})

describe('counter is 0 and decrement clicked',()=>{
    test('error need to show',()=>{
        const decrementButton=findByTestAttr(wrapped,'decrement-button')
        decrementButton.simulate('click');
        const errorText=findByTestAttr(wrapped,"error-message");
        const errorhasClass=errorText.hasClass('show');
        //console.log(wrapped.debug())
        expect(errorhasClass).toBe(true);
    })

    test('count still displays 0',()=>{
        const countDisplayText=findByTestAttr(wrapped,'count').text();
        expect(countDisplayText).toBe('0');
    })

    test('cilicking increment clear the error',()=>{
        const incrementButton=findByTestAttr(wrapped,'increment-button');
        incrementButton.simulate('click');
        const errorText=findByTestAttr(wrapped,'error-message');
        const errorhasClass=errorText.hasClass('hide');
        expect(errorhasClass).toBe(true);
    })
})





 
