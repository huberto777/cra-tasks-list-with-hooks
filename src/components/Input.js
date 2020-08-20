import React from 'react';

const Input = ({ ...props }) => {
  return (
    <div className="form-group row">
      <label className="col-form-label text-md-left col-md-2">{props.label}</label>
      <div className="col-md-12">
        <input {...props} className="form-control" />
      </div>
    </div>
  );
};

export default Input;
