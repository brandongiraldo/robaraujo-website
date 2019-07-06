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

const fieldState = {
    value: "",
    error: ""
};

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: {...fieldState},
            email: {...fieldState},
            subject: {...fieldState},
            message: {...fieldState},
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        Object.keys(this.state).forEach(key => {
            this.validateField(key, this.state[key].value);
        });
        console.log(this.state);
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name] : {...fieldState, value}
        }, () => this.validateField(name, value));
    };

    validateField = (name, value) => {
          switch (name) {
              case "email":
                  const isValidEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                  break;
              default:
                  this.validateGenericField(name, value);
                  break;
          }
    };

    validateGenericField = (name, value) => {
        if(value.length < 1) {
            this.setState({
                [name]: {...fieldState, error: `${name} must be at least 1 character long`}
            })
        }
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
