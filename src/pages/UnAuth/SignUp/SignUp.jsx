import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignUp = ({ setSignUp }) => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    newEmail: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    newLogin: Yup.string().required("Login is required"),
    newPassword: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    toast.success("Information has been updated!");
    setTimeout(() => {
      setSignUp(values);
      navigate("/");
      setSubmitting(false);
    }, 800);
    window.localStorage.setItem("newToken", JSON.stringify(values));
  };

  return (
    <div className="flex justify-center mt-[40px]">
      <ToastContainer />
      <div className="flex flex-col space-y-[33px]">
        <h2 className="text-[36px] text-[#4F4F4F] font-semibold text-center">
          Welcome, Sign up
        </h2>
        <Formik
          initialValues={{ newEmail: "", newLogin: "", newPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="w-[512px] bg-[#f6f3f3] pt-[62px] pb-[49px] px-[132px] text-center flex flex-col rounded-[15px]">
              <h4 className="text-[#667085] text-[16px] font-medium mb-[28px]">
                It is our great pleasure to have you on board!
              </h4>
              <Field
                className={`pt-[13px] pb-[12px] pl-[13px] w-[248px] placeholder:#8A8A8A rounded-[4px] border-[1px] border-[#A7A7A7] outline-none ${
                  errors.newEmail && touched.newEmail
                    ? "border-red-500"
                    : "focus:border-[#2D88D4] focus:border-[1px] focus:shadow-md"
                } pr-3`}
                name="newEmail"
                type="email"
                placeholder="Enter your Email"
              />
              {errors.newEmail && touched.newEmail && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.newEmail}
                </div>
              )}
              <Field
                className={`my-[15px] pt-[13px] pb-[12px] pl-[13px] w-[248px] placeholder:#8A8A8A rounded-[4px] border-[1px] border-[#A7A7A7] outline-none ${
                  errors.newLogin && touched.newLogin
                    ? "border-red-500"
                    : "focus:border-[#2D88D4] focus:border-[1px] focus:shadow-md"
                } pr-3`}
                name="newLogin"
                type="text"
                placeholder="Create your Login"
              />
              {errors.newLogin && touched.newLogin && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.newLogin}
                </div>
              )}
              <Field
                className={`pt-[13px] pb-[12px] pl-[13px] w-[248px] placeholder:#8A8A8A rounded-[4px] border-[1px] border-[#A7A7A7] outline-none ${
                  errors.newPassword && touched.newPassword
                    ? "border-red-500"
                    : "focus:border-[#2D88D4] focus:border-[1px] focus:shadow-md"
                } pr-3`}
                name="newPassword"
                type="password"
                placeholder="Create your Password"
              />
              {errors.newPassword && touched.newPassword && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.newPassword}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[248px] bg-[#2D88D4] pt-[11px] pb-[12px] rounded-md text-white text-center mt-[15px] hover:opacity-55 transition-[0.3s] font-bold"
              >
                Sign up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
