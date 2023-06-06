import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Layout from "../../layout/layout";

interface RegistrationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null!], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues: RegistrationFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegistrationForm: React.FC = () => {
  const handleSubmit = (values: RegistrationFormValues) => {
    console.log(values);
    // Perform registration logic here
  };

  return (
    <Layout>
      <h1 className="text-center font-bold text-2xl">Register</h1>
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-1/2 m-auto">
          <div className="py-5">
            <label htmlFor="firstName">First Name</label>
            <br />
            <Field
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              className="my- py-2 px-2 rounded-lg focus:outline-none focus:ring-03 w-full bg-transparent border-b-2 "
            />
            <ErrorMessage className="text-red-500" name="firstName" component="div" />
          </div>

          <div className="py-5">
            <label htmlFor="lastName">Last Name</label>
            <br />
            <Field
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              className="my-3 py-2 px-2 rounded-lg focus:outline-none focus:ring-0 w-full bg-transparent border-b-2 "
            />
            <ErrorMessage className="text-red-500" name="lastName" component="div" />
          </div>

          <div className="py-5">
            <label htmlFor="email">Email</label>
            <br />
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="my-3 py-2 px-2 rounded-lg focus:outline-none focus:ring-0 w-full bg-transparent border-b-2 "
            />
            <ErrorMessage className="text-red-500" name="email" component="div" />
          </div>

          <div className="py-5">
            <label htmlFor="password">Password</label>
            <br />
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="my-3 py-2 px-2 rounded-lg focus:outline-none focus:ring-0 w-full bg-transparent border-b-2 "
            />
            <ErrorMessage className="text-red-500" name="password" component="div" />
          </div>

          <div className="py-5">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <br />
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="my-3 py-2 px-2 rounded-lg focus:outline-none focus:ring-0 w-full bg-transparent border-b-2 "
            />
            <ErrorMessage className="text-red-500" name="confirmPassword" component="div" />
          </div>

          <button className="border px-4 py-1 rounded bg-cyan-400" type="submit">Register</button>
        </Form>
      </Formik>
    </div>
    </Layout>
  );
};

export default RegistrationForm;
