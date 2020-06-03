import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 3) {
    errors.name = "Must have min 3 characters";
  }

  return errors;
};

const AddTask = ({ addTask }) => {
  const minDate = new Date().toISOString().slice(0, 10);
  const formik = useFormik({
    initialValues: {
      name: "",
      priority: "",
      date: minDate,
      done: false,
      finishDate: null,
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addTask(values);
      resetForm();
    },
  });
  return (
    <>
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
            placeholder="add task"
          />
          {formik.errors.name ? (
            <div className="alert alert-danger">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-group form-check">
          <input
            id="priority"
            name="priority"
            type="checkbox"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.priority}
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="priority">
            priorytet
          </label>
        </div>
        <button className="btn btn-block btn-outline-warning" type="submit">
          Dodaj
        </button>
      </form>
    </>
  );
};

export default AddTask;
