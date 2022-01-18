import React from "react";
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as Yup from 'yup'

const initialValues = {
  name: "SSS",
  email: "",
  address: "",
};

const onSubmit = (values) => {
    console.log(values)
}

const validationSchema = Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email('Not a valid email').required('Required'),
    address:Yup.string().required('Address is required')  
})

function FormikForm2() {

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" />
        <br />
        <label htmlFor="email">Email Id</label>
        <Field type="text" id="email" name="email" />
        <ErrorMessage name="email" />
        <br />
        <label htmlFor="address">Address</label >
        <Field type="text" id="address" name="address" />
        <ErrorMessage name="address" />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikForm2;