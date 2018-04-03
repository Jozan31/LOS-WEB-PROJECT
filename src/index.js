import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';



const initialState = {
  connected: false,
  id: '',
  username: '',
  mail: '',
  tok:''
};


function reducer(state = initialState, action) {
  switch(action.type) {
	case 'CONNECT':
      return Object.assign({}, state, {
        connected: true
      });
	case 'DISCONNECT':
      return Object.assign({}, state, {
        connected: false
      });
	case 'SETUSER':
      return Object.assign({}, state, {
        username: action.value
      });
	case 'SETID':
      return Object.assign({}, state, {
        id: action.value
      });
	case 'SETMAIL':
      return Object.assign({}, state, {
        mail: action.value
      });
	  case 'SETTOK':
      return Object.assign({}, state, {
        tok: action.value
      });
    default:
      return state;
  }
}

const store = createStore(reducer);
const MainApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
