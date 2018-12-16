import * as React from "react";

const Form = () => {
  return (
      <form className="col-xs-12 col-sm-12 col-md-12 col-lg-12" method="post" action="#contact">
        <input placeholder="NAME" type="text" name="name" required=""/>
        <input placeholder="EMAIL" type="text" name="mail" required=""/>
        <input placeholder="SUBJECT" type="text" name="subject" required=""/>
        <h3 className="textarea">MESSAGE</h3>
        <textarea rows="6" cols="50" name="comment" required=""/>
        <p className="error"/>
        <button className="submit" type="submit">SUBMIT</button>
      </form>
  );
};

export default Form;