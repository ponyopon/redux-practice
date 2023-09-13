import React from 'react';
import {combineReducers, createStore} from "redux";
import counterReducer from './counter';
import loginReducer from './isLoggin';


 const allReducers = combineReducers({
    counter : counterReducer,
    isLogin : loginReducer,
 });


const index = () => {
  return (
    <div>index</div>
  )
};

export default allReducers;