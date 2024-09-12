"use client";

import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const router = useRouter();

    const validateForm = () => {
        let isValid = true;
        if (!username) {
            setUsernameError("Username is required");
            isValid = false;
        } else if (username.length < 3) {
            setUsernameError("Username must be at least 3 characters");
            isValid = false;
        } else {
            setUsernameError("");
        }
        if (!password) {
            setPasswordError("Password is required");
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
            isValid = false;
        } else {
            setPasswordError("");
        }

        return isValid;
    };

    const handleRegister = (e: any) => {
        e.preventDefault();
        if (validateForm()) {
            localStorage.setItem(
                "user",
                JSON.stringify({ username, password })
            );
            toast.success("Account Created successful");
            router.push("/login");
        } else {
            toast.error("Something went wrong...!")
        }
    };

    return (
        <div className="w-full h-screen md:bg-white bg-gray-100">
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-[900px] h-[700px] bg-gray-100 flex md:flex-row flex-col">
                    <div className="md:w-[45%] w-full md:flex hidden h-full bg-gradient-to-r from-gray-500 to-slate-500 text-white">
                        <div className="w-full h-[650px] flex justify-center items-center">
                            <div className="w-[300px] h-[300px] flex justify-center items-center flex-col">
                                <p className="text-3xl font-serif font-bold text-center">
                                    Welcome to ERP Portal
                                </p>
                                <p className="p-4 text-lg text-center">
                                    Manage your resources efficiently. Collaborate, organize, and
                                    succeed every day!
                                </p>
                                <p className="text-sm text-center">
                                    Streamlining operations for better productivity and growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[55%] w-full h-full flex justify-center items-center bg-gray-100">
                        <div className="w-[400px] h-[400px] md:bg-white bg-gray-100 flex justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-full h-full p-4 flex justify-center items-center">
                                    <div className="w-full h-full flex flex-col justify-center items-center border bg-white md:bg-white rounded-md shadow-md">
                                        <div className="md:w-[400px] md:h-[400px] w-full h-full flex flex-col p-14 justify-center items-center">
                                            <p className="text-lg font-bold text-gray-600 mb-7">
                                                Sign Up
                                            </p>
                                            <form
                                                className="w-full flex flex-col items-center"
                                                onSubmit={handleRegister}
                                            >
                                                <div className="w-full flex flex-col mb-6">
                                                    <div className="flex items-center border-b-2">
                                                        <FaUser className="text-xl mr-2" />
                                                        <input
                                                            value={username}
                                                            type="text"
                                                            placeholder="Username"
                                                            className="w-full p-2 outline-none"
                                                            onChange={(e) => setUsername(e.target.value)}
                                                        />
                                                    </div>
                                                    {usernameError && (
                                                        <p className="text-red-500 text-sm">{usernameError}</p>
                                                    )}
                                                </div>
                                                <div className="w-full flex flex-col mb-6">
                                                    <div className="flex items-center border-b-2">
                                                        <CiLock className="text-xl mr-2" />
                                                        <input
                                                            value={password}
                                                            type="password"
                                                            placeholder="Password"
                                                            className="w-full p-2 outline-none"
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                    </div>
                                                    {passwordError && (
                                                        <p className="text-red-500 text-sm">{passwordError}</p>
                                                    )}
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="bg-gray-400 w-[150px] text-base cursor-pointer font-semibold mt-5 rounded-lg ring-white ring-1 text-white flex justify-center p-2 items-center text-center"
                                                >
                                                    Register
                                                </button>
                                            </form>
                                            <p className="mt-4 text-sm">
                                                Already have an account?{" "}
                                                <Link href="/login">
                                                    <span className="text-blue-500 cursor-pointer">
                                                        Login
                                                    </span>
                                                </Link>
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
