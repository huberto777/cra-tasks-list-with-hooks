import React from 'react';
import { useFormik } from 'formik';
import Checkbox from './Checkbox';
import Input from './Input';

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Must have min 3 characters';
  }

  return errors;
};

const AddTask = ({ addTask, onCancel }) => {
  const minDate = new Date().toISOString().slice(0, 10);
  const formik = useFormik({
    initialValues: {
      name: '',
      priority: false,
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
    <form onSubmit={formik.handleSubmit}>
      <Input
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        placeholder="add task"
      />

      {formik.errors.name ? <div className="text text-danger">{formik.errors.name}</div> : null}

      <Checkbox
        text="priorytet"
        name="priority"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.priority}
      />

      <button className="btn btn-block btn-outline-warning" type="submit">
        Dodaj
      </button>
      <button className="btn btn-block btn-outline-danger" onClick={onCancel}>
        Anuluj
      </button>
    </form>
  );
};

export default AddTask;
