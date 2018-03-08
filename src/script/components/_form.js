import React, { Component } from 'react';

export default class FormSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
			value: ''
		};

        this.fieldUpdate = this.fieldUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
		event.preventDefault();
		const { value } = this.state;
        const returnTxt = value == '' ? null : value;
        
        if(this.props.clearOnSubmit) {
           this.setState({
               value: ''
           });
        }

		// Handle Submition
        this.props.getValue(returnTxt);
    }

    fieldUpdate(event){
		this.setState({
			value: event.target.value
		});
	}

    render() {
		const { value } = this.state;
		const { placeholder } = this.props;

        return (
            <form action="?" onSubmit={this.handleSubmit}>
                <div className="field search">
                    <input type="text" onChange={this.fieldUpdate} value={value} placeholder={placeholder} />
                </div>
                <div className="field">
                    <button>Submit</button>
                </div>
            </form>
        );
    }
}