import React from 'react';
import { useFormik } from 'formik';
import Input from './Input';

const LoginForm = ({ onLoginAttempt, errorMessage }) => {
  const formik = useFormik({
    initialValues: { email: 'hubert@example.com', password: 'secret' },
    onSubmit: (values) => {
      onLoginAttempt(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="jumbotron bg-dark text-white">
      {errorMessage ? <div className="text text-center text-danger">{errorMessage}</div> : null}
      <Input
        name="email"
        type="text"
        label="Email:"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Input
        name="password"
        type="password"
        label="Password:"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <button type="submit" className="btn btn-block btn-outline-warning">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
