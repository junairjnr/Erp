// "use client";

// import { LogOut } from "lucide-react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import logo from '../../assets/erp-log.png'
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import useStore from "@/app/Store";

// export default function Navbar() {

//     const logout = useStore((state) => state.logout);
//     const user = useStore((state) => state.user);

//     const router = useRouter();
//     const handleLogOut = () => {
//         localStorage.removeItem("user");
//         logout();
//         router.push("/login");
//         toast.success("Logout Successfully");
//     };

//     // const storedUser = JSON.parse(localStorage.getItem("user") || "{}");


//     const [currentTime, setCurrentTime] = useState(new Date());

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     const formattedDate = currentTime.toLocaleDateString();
//     const formattedTime = currentTime.toLocaleTimeString();

//     const hour = currentTime.getHours();
//     let greeting = '';

//     if (hour < 12) {
//         greeting = 'Good Morning';
//     } else if (hour >= 12 && hour < 18) {
//         greeting = 'Good Afternoon';
//     } else {
//         greeting = 'Good Evening';
//     }

//     return (
//         <div className="w-full h-full bg-gray-950 border-b">
//             <nav className="w-[450px] md:w-full h-[70px] flex md:justify-between justify-center items-center   border-b border-black">

//                 <Link href={"/dashboard"}><Image
//                     alt=""
//                     src={logo}
//                     height={80}
//                     width={80}
//                     priority={true}
//                     className="ml-5 cursor-pointer object-contain h-auto w-auto"
//                 />
//                 </Link>
//                 <div className="flex justify-center items-center flow-row gap-3">

//                     <p className="cursor-pointer text-2xl text-white hover:text-gray-400 font-semibold font-sans">Hi, {user?.username}</p>
//                     <p className="cursor-pointer text-4xl text-white hover:text-gray-400 font-bold font-serif"> {greeting}</p>
//                 </div>
//                 <div className="w-[250px] h-full  justify-between md:flex  hidden items-center p-2  mr-4 text-gray-50">
//                     <div className=" flex flex-col justify-center items-center">
//                         <p className="cursor-pointer hover:text-gray-400 font-bold text-lg">{formattedTime}</p>
//                         <p className="cursor-pointer hover:text-gray-400 font-bold text-sm">{formattedDate}</p>
//                     </div>
//                     <p
//                         onClick={handleLogOut}
//                         className=" gap-3 cursor-pointer  hover:text-gray-400 md:flex font-bold"
//                     >
//                         Log out <LogOut className="" />
//                     </p>
//                 </div>
//                 <div className="justify-end items-end md:hidden flex">
//                     <LogOut onClick={handleLogOut} className="ml-[150px]" />
//                 </div>
//             </nav>
//         </div>
//     );
// }


"use client";

import { LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import logo from "../../assets/erp-log.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import useStore from "@/app/Store";

export default function Navbar() {
    const logout = useStore((state) => state.logout);
    const user = useStore((state) => state.user);

    const screenWidth = window.innerWidth;

    const router = useRouter();

    const handleLogOut = () => {
        localStorage.removeItem("user");
        logout();
        router.push("/login");
        toast.success("Logout Successfully");
    };

    const [currentTime, setCurrentTime] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedDate = currentTime?.toLocaleDateString("en-IN", {
        timeZone: "Asia/Kolkata",
    });

    const formattedTime = currentTime?.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const hour = parseInt(
        currentTime
            ?.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
            .split(",")[1]
            .split(":")[0],
        10
    );

    const greeting =
        hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

    return (
        <div className="w-full bg-gray-950 border-b border-gray-800">
            <nav className="w-full mx-auto flex flex-wrap items-center justify-between h-[70px] px-4">
                {/* Logo */}

                <Link href={"/dashboard"}>
                    <Image
                        alt="ERP Logo"
                        src={logo}
                        // src={screenWidth && screenWidth > 769 && (logo)}
                        height={50}
                        width={50}
                        priority
                        className="cursor-pointer object-contain h-auto w-auto"
                    />
                </Link>

                {/* User Greeting */}
                <div className="flex flex-col items-center md:flex-row md:gap-3">
                    <p className="text-xl text-white hover:text-gray-400 font-semibold">
                        Hi, {user?.username || "User"}
                    </p>
                    <p className="text-2xl text-white hover:text-gray-400 font-bold font-serif">
                        {greeting}
                    </p>
                </div>

                {/* Date, Time, and Logout */}
                <div className="hidden md:flex md:items-center md:gap-6">
                    <div className="text-center">
                        <p className="text-lg text-white hover:text-gray-400 font-bold">
                            {formattedTime}
                        </p>
                        <p className="text-sm text-white hover:text-gray-400 font-semibold">
                            {formattedDate}
                        </p>
                    </div>
                    <div
                        onClick={handleLogOut}
                        className="flex items-center gap-2 text-white hover:text-gray-400 cursor-pointer"
                    >
                        <span className="font-bold">Log out</span>
                        <LogOut />
                    </div>
                </div>

                {/* Mobile Logout */}
                <div className="flex md:hidden items-end">
                    <LogOut
                        onClick={handleLogOut}
                        className="text-white hover:text-gray-400 cursor-pointer"
                    />
                </div>
            </nav>
        </div>
    );
}




// "use client";

// import { LogOut } from "lucide-react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import logo from "../../assets/erp-log.png";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import useStore from "@/app/Store";

// export default function Navbar() {
//     const logout = useStore((state) => state.logout);
//     const user = useStore((state) => state.user);

//     const router = useRouter();

//     const handleLogOut = () => {
//         localStorage.removeItem("user");
//         logout();
//         router.push("/login");
//         toast.success("Logout Successfully");
//     };

//     // Current time state for client-side only
//     const [currentTime, setCurrentTime] = useState(null);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     // const formattedDate = currentTime?.toLocaleDateString() || "Loading...";
//     // const formattedTime = currentTime?.toLocaleTimeString() || "--:--:--";

//     // // Greeting based on time
//     // const hour = currentTime ? currentTime.getHours() : 0;
//     // const greeting =
//     //     hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

//     const formattedDate = currentTime?.toLocaleDateString("en-IN", {
//         timeZone: "Asia/Kolkata",
//     });

//     const formattedTime = currentTime?.toLocaleTimeString("en-IN", {
//         timeZone: "Asia/Kolkata",
//         hour12: true, // 12-hour format
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//     });

//     // Greeting based on hour
//     const hour = currentTime?.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }).split(",")[1].split(":")[0];
//     const greeting =
//         hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

//     return (
//         <div className="w-full h-full bg-gray-950 border-b">
//             <nav className="w-[450px] md:w-full h-[70px] flex md:justify-between justify-center items-center border-b border-black">
//                 {/* Logo */}
//                 <Link href={"/dashboard"}>
//                     <Image
//                         alt="ERP Logo"
//                         src={logo}
//                         height={50}
//                         width={50}
//                         priority
//                         className="ml-5 cursor-pointer object-contain h-auto w-auto"
//                     />
//                 </Link>

//                 {/* User Greeting */}
//                 <div className="flex justify-center items-center flex-row gap-3">
//                     <p className="cursor-pointer text-2xl text-white hover:text-gray-400 font-semibold font-sans">
//                         Hi, {user?.username || "User"}
//                     </p>
//                     <p className="cursor-pointer text-4xl text-white hover:text-gray-400 font-bold font-serif">
//                         {greeting}
//                     </p>
//                 </div>

//                 {/* Date, Time, and Logout */}
//                 <div className="w-[250px] h-full justify-between md:flex hidden items-center p-2 mr-4 text-gray-50">
//                     <div className="flex flex-col justify-center items-center">
//                         <p className="cursor-pointer hover:text-gray-400 font-bold text-lg">
//                             {formattedTime}
//                         </p>
//                         <p className="cursor-pointer hover:text-gray-400 font-bold text-sm">
//                             {formattedDate}
//                         </p>
//                     </div>
//                     <p
//                         onClick={handleLogOut}
//                         className="gap-3 cursor-pointer hover:text-gray-400 md:flex font-bold"
//                     >
//                         Log out <LogOut />
//                     </p>
//                 </div>

//                 {/* Mobile Logout */}
//                 <div className="justify-end items-end md:hidden flex">
//                     <LogOut onClick={handleLogOut} className="ml-[150px]" />
//                 </div>
//             </nav>
//         </div>
//     );
// }
