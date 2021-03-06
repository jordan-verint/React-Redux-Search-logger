import React, { Component } from 'react';
import { connect } from "react-redux";

// REDUX --- Action
import { getSearch, deleteSearch } from "../redux/actions/action-search";
// Components
import FormSearch from '../components/_form';
// Error Handler 
import ErrorBoundary from '../util/ErrorBoundary';

class App extends Component{
    constructor(props){
        super(props);
        this.formValue = this.formValue.bind(this);
        this.removeSearch = this.removeSearch.bind(this);
    }

    // If form value is valid/not empty pass to searcher to be mapped
    formValue(val){
        if (val != null){
            this.props.searcher(val);
        } else {
            alert('No Search supplied');
        }
    }

    removeSearch(index){
        this.props.removeSearch(index);
    }

    render(){
        return (
            <ErrorBoundary>
                <div className="container">
                    <h1>Redux simple search logger</h1>
                    <FormSearch 
                        placeholder='Please Search'
                        getValue={this.formValue}
                        clearOnSubmit={true}
                    />

                    <ul>
                        {this.props.searchList.map( (item, index) => {
                            return(
                                <li key={index}> {item} <span className="remove" onClick={this.removeSearch.bind(this, index)}>Remove</span> </li>
                            );
                        })}
                    </ul>
                </div>
            </ErrorBoundary>
        );
    }
}

// Create prop named searchList assign serach state from redux store 
const mapStateToProps = state => {
    return {
        searchList: state.search
    };
}

// On call of searcher within class/lifecycle pass query to action
const mapDispatchToProps = dispatch => {
    return {
        searcher: query => { dispatch( getSearch(query) ) },
        removeSearch: index => { dispatch( deleteSearch(index) ) }
    }
}

// Connect store and pass in state mapper and prop dispatcher
export default connect(mapStateToProps, mapDispatchToProps)(App);