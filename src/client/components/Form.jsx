import * as React from "react";
import styled from '@emotion/styled'

const Input = styled.input`
    display: block;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    padding: 7px 0px 7px 5px;
    color: #FFFFFF;
    margin-bottom: 15px;
    outline: none;
    width: 40%;
    border-radius: 0px;
`;

const TextArea = styled.textarea`
    background: transparent;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    width: 80%;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    border-radius: 0px;
`;

const SubmitButton = styled.button`
    display: inline;
    background: transparent;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    margin-top: 25px;
    padding: 12px 38px;
    outline: none;
    transition: .2s;
    letter-spacing: 1.3px;
`;

const TextAreaTitle = styled.h4`
    display: block;
    color: rgb(153,153,153);
    padding: 10px 0px 10px 5px;
    font-weight: 300;
    margin: 0;
    color: #676767;
`;

const fields = ['name', 'email', 'subject', 'message'];

const fieldState = {
    value: "",
    error: ""
};

// 👌
const initialFieldsState = fields.reduce((obj, item) => (obj[item] = {...fieldState}, obj) , {});

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...initialFieldsState,
            hasFormError: true
        };
    }

    handleSubmit = (event) => {
        if(!this.state.hasFormError) {
            this.sendFormData();
        } else {
            Object.keys(this.state)
                .filter(key => this.state[key].value !== undefined)
                .forEach(key => this.validateField(key, this.state[key].value));
        }
        event.preventDefault();
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name] : {...fieldState, value}
        }, () => this.validateField(name, value));
    };

    validateForm = () => {
        const hasFormError = Object.keys(this.state)
            .filter(key => this.state[key].value !== undefined)
            .filter(key => this.state[key].value.length < 1 || this.state[key].error.length > 0);

        this.setState({
            hasFormError: hasFormError.length > 0
        });
    };

    sendFormData = () => {
      console.log("Submitted data", this.state);
    };

    validateField = (name, value) => {
        this.validateGenericField(name, value);
        if(name === "email") {
            const isValidEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            if(!isValidEmail) {
                const error = `${name} must be in a valid email format`;
                this.setFieldErrorState(name, error);
            } else {
                this.resetFieldErrorState(name);
            }
        }
    };

    validateGenericField = (name, value) => {
        if(value.length < 1) {
            const error = `${name} must be at least 1 character long`;
            this.setFieldErrorState(name, error);
        } else {
            this.resetFieldErrorState(name);
        }
    };

    setFieldErrorState = (name, error) => {
        this.setState(state => {
            return { ...state,
                [name]: { ...state[name], error },
                hasFormError: true }
        });
    };

    resetFieldErrorState = (name) => {
        this.setState(state => {
            return { ...state, [name]: { ...state[name], error: ''}}
        }, () => this.validateForm());
    };

    render() {
        return (
            <form className="col-xs-12 col-sm-12 col-md-12 col-lg-12" onSubmit={this.handleSubmit}>
                <Input placeholder="NAME" type="text" name="name" onChange={this.handleChange} />
                {this.state.name.error && <p>{this.state.name.error}</p>}
                <Input placeholder="EMAIL" type="text" name="email" onChange={this.handleChange} />
                {this.state.email.error && <p>{this.state.email.error}</p>}
                <Input placeholder="SUBJECT" type="text" name="subject" onChange={this.handleChange} />
                {this.state.subject.error && <p>{this.state.subject.error}</p>}
                <TextAreaTitle>MESSAGE</TextAreaTitle>
                <TextArea rows="6" cols="50" name="message" onChange={this.handleChange} />
                {this.state.message.error && <p>{this.state.message.error}</p>}
                <SubmitButton type="submit">SUBMIT</SubmitButton>
            </form>
        );
    }
}
