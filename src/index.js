import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/style/main.scss"
import {createStore} from "redux";
import { Provider } from 'react-redux';
import App from './App';
import { action } from "./redux/actions/action";
const initialState ={
  count:0,
}
const {addToCard}=action;
function reducer (state=initialState,action){
  switch(action.type){
    case addToCard:{
      return{
        count:state.count +1,
      }
    }
    
    default:return state
  }
}
const store =createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

