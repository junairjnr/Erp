"use client";

import { LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import logo from '../../assets/erp-log.png'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {

    const router = useRouter();
    const handleLogOut = () => {
        localStorage.removeItem("user")
        router.push("/login");
        toast.success("Logout Successfully");
    };

    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");


    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedDate = currentTime.toLocaleDateString();
    const formattedTime = currentTime.toLocaleTimeString();

    const hour = currentTime.getHours();
    let greeting = '';

    if (hour < 12) {
        greeting = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    return (
        <div className="w-full h-full bg-gray-950 border-b">
            <nav className="w-[450px] md:w-full h-[70px] flex md:justify-between justify-center items-center   border-b border-black">
               
               <Link href={"/dashboard"}><Image
                    alt=""
                    src={logo}
                    height={80}
                    width={80}
                    priority={true}
                    className="ml-5 cursor-pointer object-contain h-auto w-auto"
                />
                </Link> 
                <div className="flex justify-center items-center flow-row gap-3">

                    <p className="cursor-pointer text-2xl text-white hover:text-gray-400 font-semibold font-sans">Hi, {storedUser.username}</p>
                    <p className="cursor-pointer text-4xl text-white hover:text-gray-400 font-bold font-serif"> {greeting}</p>
                </div>
                <div className="w-[250px] h-full  justify-between md:flex  hidden items-center p-2  mr-4 text-gray-50">
                    <div className=" flex flex-col justify-center items-center">
                        <p className="cursor-pointer hover:text-gray-400 font-bold text-lg">{formattedTime}</p>
                        <p className="cursor-pointer hover:text-gray-400 font-bold text-sm">{formattedDate}</p>
                    </div>
                    <p
                        onClick={handleLogOut}
                        className=" gap-3 cursor-pointer  hover:text-gray-400 md:flex font-bold"
                    >
                        Log out <LogOut className="" />
                    </p>
                </div>
                <div className="justify-end items-end md:hidden flex">
                    <LogOut onClick={handleLogOut} className="ml-[150px]" />
                </div>
            </nav>
        </div>
    );
}