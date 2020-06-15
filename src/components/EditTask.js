import React from 'react';
import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Must have min 3 characters';
  }
  return errors;
};

const EditTask = ({ update, edit, task }) => {
  const { name } = task;
  const formik = useFormik({
    initialValues: {
      name,
    },
    validate,
    onSubmit: ({ name }) => {
      update({ ...task, name });
    },
  });
  return (
    <div className="jumbotron bg-dark text-white">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="form-control"
          />
          {formik.errors.name ? (
            <div className="alert alert-danger">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-group">
          <button className="btn btn-block btn-outline-warning" type="submit">
            Edytuj
          </button>
        </div>
        <div className="form-group">
          <button className="btn btn-block btn-outline-danger" onClick={edit}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
