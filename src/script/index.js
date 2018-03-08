import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import ReduxPromise from "redux-promise";

import "../assets/scss/main.css";

// Get Redux Store
import store from './redux';

// Container import
import App from './containers/App';

class SearchApp extends Component{
    render() {
        return(
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

ReactDOM.render(<SearchApp/>, document.getElementById('app'));