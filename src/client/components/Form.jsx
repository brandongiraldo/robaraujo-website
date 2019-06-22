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

export default class Form extends React.Component {

    render() {
        return (
            <form className="col-xs-12 col-sm-12 col-md-12 col-lg-12" method="post" action="#contact">
                <Input placeholder="NAME" type="text" name="name" required=""/>
                <Input placeholder="EMAIL" type="text" name="mail" required=""/>
                <Input placeholder="SUBJECT" type="text" name="subject" required=""/>
                <TextAreaTitle>MESSAGE</TextAreaTitle>
                <TextArea rows="6" cols="50" name="comment" required=""/>
                <p className="error"/>
                <SubmitButton className="submit" type="submit">SUBMIT</SubmitButton>
            </form>
        );
    }
}
