"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const registrationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={registrationSchema}
        onSubmit={(values) => {
          // Handle registration
        }}
      >
        {() => (
          <Form>
            <Field name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
            <Field name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}