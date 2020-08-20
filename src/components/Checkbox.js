import React from 'react';

const Checkbox = (props) => {
  return (
    <div>
      <label>
        <input type="checkbox" {...props} />
        <span style={{ marginLeft: 12 }}>{props.text}</span>
      </label>
    </div>
  );
};

export default Checkbox;
