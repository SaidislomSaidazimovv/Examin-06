import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Login = ({ setToken }) => {
  const newData = JSON.parse(window.localStorage.getItem("newToken")) || {
    newLogin: "Saidislom",
    newPassword: "5055",
  };

  const validationSchema = Yup.object({
    login: Yup.string().required("Login is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if (
      values.login === newData.newLogin &&
      values.password === newData.newPassword
    ) {
      toast.success("Login successful");
    } else {
      toast.error("Login failed");
    }
    setTimeout(() => {
      setToken(values);
      setSubmitting(false);
    }, 800);
    window.localStorage.setItem("token", JSON.stringify(values));
  };

  return (
    <div className="flex justify-center mt-[70px]">
      <ToastContainer />
      <div className="flex flex-col space-y-[53px]">
        <h2 className="text-[36px] text-[#4F4F4F] font-semibold">
          Welcome, Log into your account
        </h2>
        <Formik
          initialValues={{ login: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="w-[512px] bg-[#f6f3f3] pt-[72px] pb-[39px] px-[132px] text-center flex flex-col rounded-[15px]">
              <h3 className="text-[#667085] text-[16px] font-medium mb-[18px]">
                It is our great pleasure to have you on board!
              </h3>
              <Field
                className={`pt-[13px] pb-[12px] pl-[13px] w-[248px] placeholder:#8A8A8A rounded-[4px] border-[1px] border-[#A7A7A7] outline-none ${
                  errors.login && touched.login
                    ? "border-red-500"
                    : "focus:border-[#2D88D4] focus:border-[1px] focus:shadow-md"
                } pr-3`}
                name="login"
                type="text"
                placeholder="Enter your Login"
              />
              {errors.login && touched.login && (
                <div className="text-red-500 text-sm mt-1">{errors.login}</div>
              )}
              <Field
                className={`pt-[13px] pb-[12px] pl-[13px] w-[248px] placeholder:#8A8A8A rounded-[4px] border-[1px] border-[#A7A7A7] outline-none mt-[14px] ${
                  errors.password && touched.password
                    ? "border-red-500"
                    : "focus:border-[#2D88D4] focus:border-[1px] focus:shadow-md"
                } pr-3`}
                name="password"
                type="password"
                placeholder="Enter Password"
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.password}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[248px] bg-[#2D88D4] pt-[11px] pb-[12px] rounded-md text-white text-center mt-[14px] hover:opacity-55 transition-[0.3s] font-bold"
              >
                Login
              </button>
              <Link
                to={"/sign-up"}
                className="mt-[14px] inline-block font-bold text-[15px] text-[#2D88D4]"
              >
                Sign up
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
