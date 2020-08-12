import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';

//importing redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { carReducer } from './reducers/carReducer'

//create a redux store
const store = createStore(carReducer)
// console.log(store.getState())


//wrap the App inside the Provider component
//pass the store to Provider as a prop
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement
);
