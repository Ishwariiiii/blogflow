"use client"
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser, verifyEmail } from "@/app/redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { useRouter } from "next/navigation";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password too short").required("Password is required"),
});

export default function ShowMoreData() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { signupData, emailVerificationSuccess } = useSelector((state) => state.auth);
  console.log("Registration successful:", signupData);

  const handleEmailVerification = () => {
    const verification = {
      id: signupData.id,
      token: signupData.emailVerificationTOken,
    };
    dispatch(verifyEmail(verification));
    setEmailVerificationBtn(true)
  };

  useEffect(() => {
    if (emailVerificationSuccess) {
      router.push("/login");
    }
  }, [emailVerificationSuccess]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-300">
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-4 bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-800"
      >
        Back
      </button>

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Registration Page</h1>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            dispatch(registerUser(values));
          }}
        >
          {({ handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-800"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
        <button
          onClick={handleEmailVerification}
          className="w-full mt-4 bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-800"
        >
          Email Verification after Registration
        </button>
      </div>
    </div>
  );
}
