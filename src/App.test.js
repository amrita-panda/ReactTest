import { render, screen } from '@testing-library/react';
import React from 'react';
// import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import CommentBox from './components/commentBox/CommentBox';
import CommentList from './components/commentList/CommentList';
let wrapped;
 beforeEach (()=>{
  wrapped=shallow(<App />);
 })
it('shows a comment box',()=>{
 expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('shows a comment List',()=>{
  expect(wrapped.find(CommentList).length).toEqual(1);
})

