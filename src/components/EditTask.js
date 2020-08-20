import React from 'react';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faWindowClose } from '@fortawesome/free-solid-svg-icons';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Must have min 3 characters';
  }
  return errors;
};

const EditTask = ({ update, task, cancelEdit, index }) => {
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
    <>
      <td>{index + 1}</td>
      <td>
        <input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="form-control"
          style={{ margin: 0, fontSize: '1em' }}
        />
        {formik.errors.name ? <div className="text text-danger">{formik.errors.name}</div> : null}
      </td>
      <td />
      <td>
        <button className="btn btn-outline-warning" type="submit" onClick={formik.handleSubmit}>
          <FontAwesomeIcon icon={faPen} />
        </button>

        <button className="btn btn-outline-danger" onClick={cancelEdit}>
          <FontAwesomeIcon icon={faWindowClose} />
        </button>
      </td>
    </>
  );
};

export default EditTask;
