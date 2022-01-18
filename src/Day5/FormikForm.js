import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

const initialValues = {
  name: "",
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

function FormikForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  console.log(formik)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        
        <input type="text" id="name" name="name" 
        value={formik.values.name} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? formik.errors.name:null}
        <br />
        <label htmlFor="email">Email Id</label>
        <input type="text" id="email" name="email" value={formik.values.email} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? formik.errors.email:null}
        <br />
        <label htmlFor="address">Address</label >
        <input type="text" id="address" name="address" value={formik.values.address} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.touched.address && formik.errors.address ? formik.errors.address:null}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormikForm;
