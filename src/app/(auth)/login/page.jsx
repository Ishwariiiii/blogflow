"use client";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { loginUser } from '@/app/redux/slice/authSlice';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

    password: Yup.string()
        .min(6, 'Password too short')
        .required('Required')
})

const Page = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    const { isLoading } = useSelector((state) => state.auth)
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token || token == "undefined") {
            router.push('/login');
        } else {
            router.push("/")
        }
    }, [token])

    return (
        <div className="flex justify-center items-center h-screen bg-orange-300">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign in</h2>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(loginUser(values))
                        setSubmitting(false)
                    }}
                >
                    {({ handleChange, handleSubmit, isSubmitting }) => (
                        <Form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="form-field">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="form-field">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                            </div> 
                            

                            <button
                                type="submit"
                                className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-800 "
                                disabled={isSubmitting || isLoading}
                            >
                                Login
                            </button>

                            <p className="text-center font-semibold mt-4">or</p>

                            <button type="button" onClick={() => router.push("/register")} className="text-white w-full bg-orange-400 py-2 rounded-lg hover:bg-orange-800 transition duration-200">
                                Register
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Page