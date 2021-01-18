 import React from 'react';
 import {Provider} from 'react-redux';
 import {createStore,applyMiddleware} from 'redux';
 import ReduxThunk from 'redux-thunk';
 //import reduxPromise from 'redux-promise';
 import reducers from './reducers/index';
 export const middlewears=[ReduxThunk]; 
 export default ({children,initialState={}}) =>{
     const store =createStore(reducers,initialState,applyMiddleware(...middlewears))
     return(
         <Provider store={store}>
             {children}
         </Provider> 
     )
 }