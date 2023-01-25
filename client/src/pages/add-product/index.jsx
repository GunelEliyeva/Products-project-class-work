import React from "react";
import { Formik, Form, Field } from "formik";
import {SignupSchema} from "./schema";
import "./add-product.scss";
import {Helmet} from "react-helmet";
import axios from "axios";



const AddProduct = () => {
  return (
    <div id="add-product">
            <Helmet>  
        <title>Add Page</title>  
        <meta name="description" content="My Add page" />  
      </Helmet>  
      <h1>ADD Product</h1>
      <Formik
        initialValues={{
          imgurl: "",
          model: "",
          name: "",
          price: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, {resetForm}) => {
            axios.post("http://localhost:8080/productss", values)
         resetForm()
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="imgurl" placeholder='Enter yout product name' className={errors.imgurl && touched.imgurl ?   "border-red": null} />
            {errors.imgurl && touched.imgurl ? (
              <div style={{ color: "red" }}>{errors.imgurl}</div>
            ) : null}
            <Field name="model" className={errors.model && touched.model ?  "border-red": null} />
            {errors.model && touched.model ? (
              <div style={{ color: "red" }}>{errors.model}</div>
            ) : null}
            <Field name="name" className={errors.name && touched.name ? "border-red": null}/>
            {errors.name && touched.name ? (
              <div style={{ color: "red" }}>{errors.name}</div>
            ) : null}
            <Field name="price" className={errors.price && touched.price ? "border-red": null}/>
            {errors.price && touched.price ? (
              <div style={{ color: "red" }}>{errors.price}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;
