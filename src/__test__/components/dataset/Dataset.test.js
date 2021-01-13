import React from 'react';
import {mount} from 'enzyme';
import Dataset from '../../../components/dataset/Dataset';
let wrapped;
beforeEach(()=>{
    wrapped=mount(
        <div>
            <Dataset />
        </div>
        )
});

afterEach(()=>{
    //component cleanup after every test complete
    wrapped.unmount();
})

it('the ui is in the place',()=>{
    expect(wrapped.find('button').length).toEqual(2);
});
describe('click Happens',()=>{
    it('create button',()=>{
        wrapped.find('#create-btn').simulate('click');
        wrapped.update();
        expect(wrapped.find('#create-btn').text()).toEqual('create')
    })
    it('listview button',()=>{
        wrapped.find('#listview-btn').simulate('click');
        wrapped.update();
        //expect(wrapped.state('renderLayout').toEqual(1))
    })
    it('gridview button',()=>{
     //console.log(wrapped.find('#gridview-btn').simulate('click'))
     //wrapped.find('#gridview-btn').simulate('click');
     //wrapped.update();
        console.log(wrapped.find('button').length)
    })
    
})