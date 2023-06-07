import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Layout from "../../layout/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSignInMutation } from "../../services/use-signin";

interface LoginFormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

const LoginForm: React.FC = () => {
 const { mutate: signin } = useSignInMutation();

  const handleSubmit = (values: LoginFormValues) => {
    console.log(values);
    signin(values);
  };

  return (
    <Layout>
      <h1 className="text-center font-bold text-2xl">Login Page</h1>
      <div className="md:w-4/5 lg:w-1/2 m-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="py-10 px-20">
            <div className="py-5">
              <label className="text-left " htmlFor="email">
                Email
              </label>
              <br />
              <Field
                type="email"
                id="email"
                name="email"
                className="border-b-2 py-2 px-2 rounded-lg  w-full border-gray-300 bg-transparent bg-black "
                placeholder="Enter your email"
              />
              <ErrorMessage
                className="text-red-500"
                name="email"
                component="div"
              />
            </div>

            <div className="py-5">
              <label className="" htmlFor="password">
                Password
              </label>
              <br />
              <br />
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="border-b-2 py-2 rounded-lg px-2 w-full border-gray-300 bg-transparent bg-black focus:bg-black focus:bg-transparent"
              />
              <ErrorMessage
                className="text-red-500"
                name="password"
                component="div"
              />
            </div>

            <button
              className="border px-4 py-1 rounded bg-cyan-400"
              type="submit"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
};

export default LoginForm;
