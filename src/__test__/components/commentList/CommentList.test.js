import React from 'react';
import {mount} from 'enzyme';
import CommentList from '../../../components/commentList/CommentList';
import Root from '../../../Root';

let wrapped;


beforeEach(()=>{
    const initialState={
        review:['review1','review2']
    }
 wrapped=mount(
     <Root initialState={initialState}>
         <CommentList />
     </Root>
 )
})

afterEach(()=>{
 
})

it('creates one li per submit',()=>{
    expect(wrapped.find('li').length).toEqual(2)
})
it('shows the text for each comment',()=>{
    //console.log(wrapped.render().text()).toContain('review1');
    expect(wrapped.render().text()).toContain('review1');
    expect(wrapped.render().text()).toContain('review2');
})