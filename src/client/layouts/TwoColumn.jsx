import React from 'react';

const TwoColumn = (props) => {
  return (
      <>
      <h1>{props.title}</h1>
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            {props.contentLeft}
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            {props.contentRight}
          </div>
        </div>
      </div>
      </>
  )
};

export default TwoColumn;