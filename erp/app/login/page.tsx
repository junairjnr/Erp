
"use client";

import { FaUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

export default function Login() {
    const router = useRouter();

    const validationSchema = Yup.object({
        username: Yup.string()
            .required("Username is required")
            .min(3, "Username must be at least 3 characters"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
            if (storedUser.username && storedUser.password) {
                if (
                    storedUser.username === values.username &&
                    storedUser.password === values.password
                ) {
                    toast.success("Login successful!");
                    router.push("/dashboard");
                } else {
                    toast.error("Invalid username or password");
                }
            } else {
                toast.error("No account exists for you....!");
            }

        },
    });

    return (
        <div className="w-full h-screen md:bg-white bg-gray-100">
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-[900px] h-[700px] bg-gray-100 flex md:flex-row flex-col">
                    <div className="md:w-[40%] w-full md:flex hidden h-full bg-gradient-to-r from-gray-500 to-slate-500 text-white">
                        <div className="w-full h-[50px] flex justify-start items-center">
                        </div>
                        <div className="w-full h-[650px] flex justify-center items-center">
                            <div className="w-[300px] h-[300px] flex justify-center items-center flex-col">
                                <p className="text-3xl font-serif font-bold text-center">
                                    Welcome Back..!
                                </p>
                                <p className="p-1 mr-2 mb-2 ml-4 text-sm text-center">
                                    Have a nice day...!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-[60%] w-full h-full flex justify-center items-center bg-gray-100">
                        <div className="w-[400px] h-[400px] md:bg-white bg-gray-100 flex justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-full h-full p-4 flex justify-center items-center">
                                    <div className="w-full h-full flex flex-col justify-center items-center border bg-white md:bg-white rounded-md shadow-md">
                                        <div className="md:w-[400px] md:h-[400px] w-full h-full flex flex-col p-14 justify-center items-center">
                                            <p className="text-lg font-bold text-gray-600 mb-14">
                                                Sign In
                                            </p>
                                            <form
                                                className="flex flex-col justify-center items-center"
                                                onSubmit={formik.handleSubmit}
                                            >
                                                <div className="w-[250px] h-[40px] bg-gray-50 flex flex-row justify-center items-center rounded-lg ring-1 ring-black mb-2">
                                                    <FaUser className="w-[45px] h-[45px] p-3 cursor-pointer" />
                                                    <input
                                                        name="username"
                                                        type="text"
                                                        placeholder="UserName"
                                                        className="w-[200px] pl-2 outline-none rounded-r-lg bg-gray-50"
                                                        value={formik.values.username}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                </div>
                                                {formik.touched.username && formik.errors.username ? (
                                                    <p className="text-red-500 text-sm">
                                                        {formik.errors.username}
                                                    </p>
                                                ) : null}

                                                <div className="w-[250px] h-[40px] bg-gray-50 flex flex-row justify-center items-center ring-1 ring-black rounded-lg mt-4">
                                                    <CiLock className="w-[49px] h-[49px] p-3 cursor-pointer" />
                                                    <input
                                                        name="password"
                                                        type="password"
                                                        placeholder="Password"
                                                        className="w-[200px] pl-2 outline-none rounded-r-lg bg-gray-50"
                                                        value={formik.values.password}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                </div>
                                                {formik.touched.password && formik.errors.password ? (
                                                    <p className="text-red-500 text-sm">
                                                        {formik.errors.password}
                                                    </p>
                                                ) : null}

                                                <div className="flex justify-center">
                                                    <button
                                                        type="submit"
                                                        className="bg-gray-400 w-[150px] text-base cursor-pointer font-semibold mt-5 rounded-lg ring-white ring-1 text-white flex justify-center p-2 items-center text-center"
                                                    >
                                                        Sign In
                                                    </button>
                                                </div>
                                            </form>
                                            <p className="mt-4 text-sm">
                                                Don't have an account..?{" "}
                                                <span
                                                    className="text-blue-500 cursor-pointer"
                                                    onClick={() => router.push("/registration")}
                                                >
                                                    Create an account
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
